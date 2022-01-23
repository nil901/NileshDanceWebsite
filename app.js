const express = require("express");
const path = require("path");
const fs = require('fs')
// getting-started.js
var mongoose = require('mongoose') ;
mongoose.connect('mongodb://localhost/conntactDance',{useNewUrlParser:true} );
const app = express();

const port = 80;

//difine mongoode schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    desc: String
  });

// app.use(express.static('static', options)) 


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname  + 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/About', (req, res)=>{
    
    const params = {}
    res.status(200).render('about.pug', params);
})
app.get('/Services', (req, res)=>{
    
    const params = {}
    res.status(200).render('Services.pug', params);
})

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
});



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
