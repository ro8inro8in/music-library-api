const express = require('express')
const app = express()
const artistControllers = require('./controllers/artists');
//^^^^^??
//const port = 4000;
//parser that is provided by express library,
//to parse only JSON requests.
app.use(express.json())
//app.use(express.urlencoded()) links to express

app.post('/artists', artistControllers.create);
//^^^^Route handler linking to artist controller file in the src folder
app.get('/artists', artistControllers.list);

//app.get('/artists/:id', artistControllers.getArtistById);
app.get('/artists/:id', artistControllers.byId);
  
module.exports = app