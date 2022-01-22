const express = require("express");
const path = require("path");
const fs = require('fs')
// getting-started.js
const app = express();
const port = 80;



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

app.get('/contact', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
