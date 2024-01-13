const express = require('express');
const app = express();

app.use((req,res,next)=>{
    res.status(200).json({
        message: 'It works!',
        Name: 'John',
        Age: 25,
        Phone: '0123456789',
        Address: '123 Jalan Ipoh',
        Country:  'Malaysia'  
    
    });
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

module.exports = app;
