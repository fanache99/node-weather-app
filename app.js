const request = require('request');
const express = require('express');

const darkweatherKey = 'c357b87fd02d491e9a4466d4cfd76fde';
const darkweatherUrl = 'http://api.weatherstack.com/current?access_key=c357b87fd02d491e9a4466d4cfd76fde&query=Vaslui';


const mapboxKey = 'pk.eyJ1IjoiZmFuYWNoZTk5IiwiYSI6ImNrZ3F6cGFldDFyeTAycnJ4Y2RjM21rM2MifQ.KFXwjcaFlHgWumVbNRJZ6Q';
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Barbu%20Mumuleanu.json?access_token=pk.eyJ1IjoiZmFuYWNoZTk5IiwiYSI6ImNrZ3F6cGFldDFyeTAycnJ4Y2RjM21rM2MifQ.KFXwjcaFlHgWumVbNRJZ6Q';

const app = express();

app.get('', (req, res) => {
    res.send({
        body:"Test",
    });
})

app.listen(3000);