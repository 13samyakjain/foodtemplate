const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use('/',(req,res)=>{
    return res.sendFile('index.html');
})
http.createServer(app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})