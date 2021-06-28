const express = require('express');
const router = express.Router();
const assignRoom = require('./Room');
router.get('/', (req, res)=> {
    res.send('Server is up and running');
})
router.get('/room', (req, res)=> {
    console.log('reaching');
    res.json({ rm: assignRoom()});
})

// router.get('/user', (req, res)=> {
//     console.log('user Controller');
    
// })

module.exports = router;