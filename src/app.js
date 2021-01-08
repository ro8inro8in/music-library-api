const express = require("express");
const app = express();
const artistControllers = require("./controllers/artists");
const albumControllers = require("./controllers/albums");

app.use(express.json());

//--------------------------ARTISTS-------------------------------------
app.post("/artists", artistControllers.create);
//^^^^Route handler linking to artist controller file in the src folder
app.get("/artists", artistControllers.list);

app.get("/artists/:id", artistControllers.byId);

app.patch("/artists/:id", artistControllers.updateArtist);

app.delete("/artists/:id", artistControllers.removeArtist);

//---------------------------ALBUMS---------------------------------------

app.get("/artists/:id/albums", albumControllers.list);

app.post("/artists/:id/albums", albumControllers.albumCreate);

app.get("/albums/:id", albumControllers.getAlbumById);

app.patch("/albums/:id", albumControllers.updateAlbum);

app.delete("/albums/:id", albumControllers.removeAlbum);

module.exports = app;
