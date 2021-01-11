const express = require("express");
const app = express();
const artistControllers = require("./controllers/artists");
const albumControllers = require("./controllers/albums");
const songControllers = require("./controllers/songs");


app.use(express.json());

//--------------------------ARTISTS-------------------------------------
app.post("/artists", artistControllers.create);
//^^^^Route handler linking to artist controller file in the src folder
app.get("/artists", artistControllers.list);

app.get("/artists/:id", artistControllers.byId);

app.patch("/artists/:id", artistControllers.updateArtist);

app.delete("/artists/:id", artistControllers.removeArtist);

//---------------------------ALBUMS---------------------------------------

//app.get("/artists/:id/albums", albumControllers.list);

app.post("/artists/:id/albums", albumControllers.albumCreate);

app.get("/albums", albumControllers.list);

app.get("/albums/:id", albumControllers.getAlbumById)

app.patch("/albums/:id", albumControllers.updateAlbum);

app.delete("/albums/:id", albumControllers.removeAlbum);

//----------------------------SONGS---------------------------------------

app.post("/albums/:albumId/songs", songControllers.create)

app.get("/songs", songControllers.list)

app.get("/songs/:id", songControllers.songById)

app.patch("/songs/:id", songControllers.songUpdate)

app.delete("/songs/:id", songControllers.removeSong)




module.exports = app;
