rooms = []
user = []
status = {}
// 
// status = {
//      roomNo : [
//              roundNo: {  }
//              ]
// }
// 
// 
// 
const assignRoom = (name) => {
    if (rooms.length===0 || rooms[rooms.length-1].length===4) {
        console.log('assigning');
        rooms.push([])
    }
    rooms[rooms.length-1].push(name);
    user[name] = rooms.length;
    status[user[name]] = { };
    return user[name];
}

// const leave = ()

// const game = ( room, id, fish ) => {
//     var curRoom = room;
//     var uID = id;
//     var curFish = fish;
    
//     if (curRoom in status) {
//         if ( id in status[curRoom] ) {
//             // console.log('Push Op')
//             status[curRoom][uID].push(curFish);
//             // status[curRoom][uID][c]++;
//         }
//         else {
//             // console.log('Add id op')
//             status[curRoom][uID] = [curFish]
//         }
//     } else {
//         status[curRoom] = { }
//         console.log('Add room op')
//     }
//     // console.log(status);
//     return status[curRoom][uID].length
// }

// const evaluate = (room, users) => {
//     var roomNo = room;
//     var u1 = users[0]
//     var u2 = users[1]
//     var u3 = users[2]
//     var u4 = users[3]
//     console.log(u1, u2, u3, u4)
//     for ( let i=0; i<4; i++ )
//         {
//             console.log(users[i].room)
//             // if (users[i] in status[roomNo])
//             //     console.log('i', i);
//         }
//     return 101;
//     // var i = status[roomNo][`${u1}`].length-1
//     const score = { 
//         u1: 0,
//         u2: 0,
//         u3: 0,
//         u4: 0
//     }

//     const j = status[roomNo]

//     // for ( let i=0; i<6; i++ ) {
//     if (j[u1][i]==j[u2][i]==j[u3][i]==j[u4][i]==2) {
//             score[u1] -= 25
//             score[u2] -= 25
//             score[u3] -= 25
//             score[u4] -= 25
//     }
//     else if ( j[u1][i]==j[u2][i]==j[u3][i]==j[u4][i]==1 ) {
//             score[u1] += 25
//             score[u2] += 25
//             score[u3] += 25
//             score[u4] += 25
//     }
//     else if ( j[u1][i]==1 && (j[u2][i]==j[u3][i]==j[u4][i]==2) ) {
//         score[u1] -= 25
//         score[u2] += 25
//         score[u3] += 25
//         score[u4] += 25
//     }
//     else if ( j[u2][i]==1 && (j[u1][i]==j[u3][i]==j[u4][i]==2) ) {
//             score[u1] += 25
//             score[u2] -= 25
//             score[u3] += 25
//             score[u4] += 25
//     }  
//     else if ( j[u3][i]==1 && (j[u2][i]==j[u1][i]==j[u4][i]==2) ) {
//             score[u1] += 25
//             score[u2] += 25
//             score[u3] -= 25
//             score[u4] += 25
//     }
//     else if ( j[u4][i]==1 && (j[u2][i]==j[u3][i]==j[u1][i]==2) ) {
//             score[u1] += 25
//             score[u2] += 25
//             score[u3] += 25
//             score[u4] -= 25
//     }
//     else if ( (j[u1][i]==1 && j[u2][i]==1 ) && ( j[u3][i]==2 && j[u4][i]==2 ) ) {
//         score[u1] -= 12.5;
//         score[u2] -= 12.5;
//         score[u3] += 50;
//         score[u4] += 50;
//     }
//     else if ( (j[u1][i]==1 && j[u3][i]==1 ) && ( j[u2][i]==2 && j[u4][i]==2 ) ) {
//         score[u1] -= 12.5;
//         score[u3] -= 12.5;
//         score[u2] += 50;
//         score[u4] += 50;
//     }
//     else if ( (j[u1][i]==1 && j[u4][i]==1 ) && ( j[u3][i]==2 && j[u2][i]==2 ) ) {
//         score[u1] -= 12.5;
//         score[u4] -= 12.5;
//         score[u3] += 50;
//         score[u2] += 50;
//     }
//     else if ( (j[u3][i]==1 && j[u2][i]==1 ) && ( j[u1][i]==2 && j[u4][i]==2 ) ) {
//         score[u3] -= 12.5;
//         score[u2] -= 12.5;
//         score[u1] += 50;
//         score[u4] += 50;
//     }
//     else if ( (j[u4][i]==1 && j[u2][i]==1 ) && ( j[u3][i]==2 && j[u1][i]==2 ) ) {
//         score[u4] -= 12.5;
//         score[u2] -= 12.5;
//         score[u3] += 50;
//         score[u1] += 50;
//     }
//     else if ( (j[u3][i]==1 && j[u4][i]==1 ) && ( j[u1][i]==2 && j[u2][i]==2 ) ) {
//         score[u4] -= 12.5;
//         score[u3] -= 12.5;
//         score[u1] += 50;
//         score[u2] += 50;
//     }
//     else if ( j[u1][i]==2 && (j[u2][i]==j[u3][i]==j[u4][i]==1) ) {
//         score[u1] += 75
//     }
//     else if ( j[u2][i]==2 && (j[u1][i]==j[u3][i]==j[u4][i]==1) ) {
//         score[u2] += 75
//     }
//     else if ( j[u3][i]==2 && (j[u2][i]==j[u1][i]==j[u4][i]==1) ) {
//         score[u3] += 75
//     }
//     else if ( j[u4][i]==2 && (j[u2][i]==j[u3][i]==j[u1][i]==1) ) {
//         score[u4] += 75
//     }
//     // }
//     console.log(`Evaluating`)
//     return score
// }




module.exports = { assignRoom }