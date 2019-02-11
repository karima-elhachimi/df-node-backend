const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./api');


const server = express();
server.use(bodyParser.json());


//end points
server.get('/', (req, res) => {

    console.log('request params: '+ req.params.data);
    const dataToSend = `welkom op de pagina!`;
    return res.json({
        speech: dataToSend,
        source: 'root'
    });
});
server.post('/get-test-data/:data', (req, res) => {
    const dataFromRequest = req.params.data;
    console.log('request params: '+ req.params.data);
    const dataToSend = `De data in de request was: ${dataFromRequest} en is goed ontvangen!`;
    return res.json({
        speech: dataToSend,
        source: 'get-test-data'
    });
});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
