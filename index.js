const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const socketio = require('socket.io');

const cors = require('cors');
const Game = require('./Room.js');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const players = {}
const recs = {}
const rounds = {}
const scrr = {}
const router = require('./router.js');

const app = express();
app.use(bodyParser.json({ extended: true }));
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
app.use(cors());
app.use(router);


io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);
    if ((room in recs)==false) {
      recs[room] = [0];
    } else {
      recs[room].push(0);
    }
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room), scores: recs[room] });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('dealerData', (dealerData, callback) => {
    const user = getUser(socket.id);
    console.log(dealerData);
    // console.log(user);
    var r = user.room;
    // console.log('INDEX')
    if ( (user.room in players) ) {
      if (players[r].length==3) {
        players[r].push(user.id)
        recs[r].push(dealerData)
        // io.to(user.id).emit('Dmessage', { user: 'Admin', text: 'You submitted last in this round.' })
        console.log('All 4 have answered');
        // console.log(players[r]);
        // console.log(recs[r]);
        var score = []
        for ( let lp=0; lp<4; lp++)
          score.push(0);
        const match = JSON.stringify(recs[r] )
        if (match == JSON.stringify(['1', '1', '1', '1']) ) { score = [25, 25, 25, 25]; }
        else if (match == JSON.stringify(['2', '2', '2', '2']) ) { score = [-25, -25, -25, -25]; }
  
        else if (match == JSON.stringify(['1', '2', '2', '2']) ) { score = [-25, 25, 25, 25]; }
        else if (match == JSON.stringify(['2', '1', '2', '2']) ) { score = [25, -25, 25, 25]; }
        else if (match == JSON.stringify(['2', '2', '1', '2']) ) { score = [25, 25, -25, 25]; }
        else if (match == JSON.stringify(['2', '2', '2', '1']) ) { score = [25, 25, 25, -25]; }
  
        else if (match == JSON.stringify(['1', '1', '2', '2']) ) { score = [-12.5, -12.5, 50, 50]; }
        else if (match == JSON.stringify(['1', '2', '1', '2']) ) { score = [-12.5, 50, -12.5, 50]; }
        else if (match == JSON.stringify(['1', '2', '2', '1']) ) { score = [-12.5, 50, 50, -12.5]; }
        else if (match == JSON.stringify(['2', '1', '1', '2']) ) { score = [50, -12.5, -12.5, 50]; }
        else if (match == JSON.stringify(['2', '1', '2', '1']) ) { score = [50, -12.5, 50, -12.5]; }
        else if (match == JSON.stringify(['2', '2', '1', '1']) ) { score = [50, 50, -12.5, -12.5]; }
        
        else if (match == JSON.stringify(['2', '1', '1', '1']) ) { score = [75, 0, 0, 0]; }
        else if (match == JSON.stringify(['1', '2', '1', '1']) ) { score = [0, 75, 0, 0]; }
        else if (match == JSON.stringify(['1', '1', '2', '1']) ) { score = [0, 0, 75, 0]; }
        else if (match == JSON.stringify(['1', '1', '1', '2']) ) { score = [0, 0, 0, 75]; }
        
        // console.log(score);
        if ( r in rounds )  rounds[r]++;
          else  rounds[r] = 1
        
        
        for ( let klo=0; klo<4; klo++ ) {
             if (rounds[r]>4)  score[klo] *= 10;
            var x = JSON.stringify(players[r][klo])
            if (x in scrr) {
              scrr[x]+=score[klo];
            } else {
              scrr[x] = score[klo];
            }
        }
        
        if (rounds[r]==6) {
          var allUsers = []
          var allScores = []
          io.to(r).emit('message', { user: 'DEALER', text: `RESULTS !`} );
          for ( let i=0; i<4; i++ ) {
            allUsers.push(getUser(players[r][i]));
            allScores.push(scrr[JSON.stringify(players[r][i])]);
          io.to(r).emit('message', { user: 'DEALER', text: `${getUser(players[r][i]).name} has scored ${scrr[JSON.stringify(players[r][i])]} Points` })
          delete scrr[JSON.stringify(players[r][i])];
        }
          // for ( let i=0; i<4; i++ ) {
          //  var cm = JSON.stringify(players[r]);
          //  io.to(r).emit('roomData', { user: 'DEALER', users: `${allUsers}`, score: `${allScores}`});
          
           // }
          console.log(allScores)
          
        }
        // console.log(dealerData)
        // const scr = Game.evaluate(r, players[r]);        
        else  
        {
          for ( let i=0; i<4; i++ ) {
            var cm = JSON.stringify(players[r][i]);
            // socket.broadcast.to(players[r]).emit( 'message', {user: `Admin`,    text : `Your score in round ${rounds[r]} is ${score[i]}`} )
            // socket.emit('message', { user: 'admin', text: `Your Score in ${rounds[r]} is ${score[i]}.`});
            io.to(players[r][i]).emit('Dmessage', { user: 'DEALER', text: `Your Score after round ${rounds[r]} is ${scrr[cm]}.`, score: `${scrr[cm]}`});
            console.log(`Fired to ${players[r][i]}`)
        }
      }
        delete players[r];
        // delete rounds[r];
      } else {
        players[r].push(user.id)
        recs[r].push(dealerData)
        console.log('increasing')
        console.log(user.id);
        console.log(players[r])
      }
    } else {
      console.log('Assigning')
      console.log(user.id);      
      players[r] = [ user.id ]
      recs[r] = [dealerData]
    }
    
    callback();
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));