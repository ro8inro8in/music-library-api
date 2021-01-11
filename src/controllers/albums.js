const { Album, Artist } = require("../models");
exports.list = (req, res) => {
  Album.findAll().then((albums) => res.status(200).json(albums));
};
exports.albumCreate = (req, res) => {
  Artist.findByPk(req.params.id)
    .then((artist) => {
      if (!artist) {
        res.status(404).json({ error: "The artist could not be found." });
      } else {
        const data = req.body;
        data.artistId = req.params.id;
        Album.create(data, { include: "artist" }).then((album) =>
          res.status(201).json(album)
        );
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};
//-----------------------------------------------------------------------------
exports.getAlbumById = (req, res) => {
  const { id } = req.params;
  Album.findByPk(id).then((album) => {
    if (!album) {
      res.status(404).json({ error: "The album could not be found." });
    } else {
      res.status(200).json(album);
    }
  });
};

exports.updateAlbum = (req, res) => {
  const { id } = req.params;
  Album.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      res.status(404).json({ error: "The album could not be found." });
    } else {
      res.status(200).json(rowsUpdated);
    }
  });
};
exports.removeAlbum = (req, res) => {
  //console.log("anything")
  const { id } = req.params;
  //console.log(id)
  Album.destroy({ where: { id } })
    .then((rowsDeleted) => {
     // console.log(rowsDeleted)
      if (!rowsDeleted) {
        res.status(404).json({ error: "The album could not be found." });
      } else {
        res.status(204).json({ message: "Deleted Successfully" });
      }
    })
    .catch((err) => console.log(err));
};
