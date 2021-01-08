const express = require('express')
const app = express()
const artistControllers = require('./controllers/artists');
const albumControllers = require("./controllers/albums");

//^^^^^??
//const port = 4000;
//parser that is provided by express library,
//to parse only JSON requests.
app.use(express.json())


//--------------------------ARTISTS-------------------------------------
app.post('/artists', artistControllers.create);
//^^^^Route handler linking to artist controller file in the src folder
app.get('/artists', artistControllers.list);


app.get('/artists/:id', artistControllers.byId);

app.patch('/artists/:id', artistControllers.updateArtist)

app.delete('/artists/:id', artistControllers.removeArtist)

//---------------------------ALBUMS---------------------------------------

app.post('/artists/:id/albums', albumControllers.albumCreate);
  
module.exports = app