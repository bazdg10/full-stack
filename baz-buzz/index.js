const { error } = require('console');
const express = require('express');
const cors = require("cors");
app.use(cors());
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const PORT = process.env.PORT || 3000;

app.listen(3000);
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

/*const users = [
    {name: "Biswanath", location: "Kolkata"},
    {name: "Arya", location: "Delhi"}
]*/

const userURI = 'mongodb+srv://bazdg10:test1234@cluster0.j1a1t.mongodb.net/BazBuzz?retryWrites=true&w=majority';
mongoose.connect(userURI, { useNewUrlParser: true, useUnifiedTopology: true } )
        .then(console.log(`Connected to db`)).catch((err)=> console.log(error));

app.use((req, res, next)=> {
    console.log(req.body);
    console.log(req.hostname);
    next();
})
// MongoDB TCs
// app.get('/add-user', (req, res)=> {
//     const user = new User({
//         name: 'Abhijit',
//         location: 'Abu Dhabi'
//     });
//     user.save()
//         .then( result => res.send(result))
//         .catch( error => res.send(error))
// })
//
app.get('/get-all', (req, res)=> {
    User.find()
        .then( result => {
            res.render('userList', { title: 'Search Results', users: result });
        })  
        .catch( err => {
            console.log(err);
        })
})


app.post('/add-user', (req, res)=> {
    const user = new User(req.body);
    user.save().then(result => res.redirect('get-all'))
        .catch(err => console.log(err));
    
});
app.post('/locn', (req, res) => {
    if (req.body.search==="All")  res.redirect('/get-all');
    else{
    User.find({ location : req.body.search})
    .then( result => {
        res.render('userList', { title: 'Search Results', users: result });
    })  
    .catch( err => {
        console.log(err);
    })
    }
});

app.post('/lookup', (req, res) => {
    if (req.body.search==="All")  res.redirect('/get-all');
    else{
    User.find({ name: req.body.search})
    .then( result => {
        res.render('userList', { title: 'Search Results', users: result });
    })  
    .catch( err => {
        console.log(err);
    })
    }
});

app.get('/', (req, res)=> {
    res.render('home', {title: 'Home'});
});


app.use((req, res)=> {
    res.status(404).render('404', {title: 'Error'});
})