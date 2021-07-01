const express = require('express');
const router = express.Router();
const Game = require('./Room.js');
router.get('/', (req, res)=> {
    res.send('Server is up and running');
})
router.post('/getRoom', (req, res)=> {
    const name = req.body.name;
    console.log('reaching');
    console.log(name);
    const room = Game.assignRoom(name);
    console.log(room);
    res.send({room: `${room}`});
})

// router.get('/user', (req, res)=> {
//     console.log('user Controller');
    
// })

module.exports = router;