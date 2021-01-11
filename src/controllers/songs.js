const { Song, Album, Artist } = require('../models');

exports.list = (req, res) => {
  Song.findAll().then((songs) => res.status(200).json(songs));
};
exports.create = (req, res) => {
    const { albumId } = req.params;
    const { artistId, name } = req.body;

  Artist.findByPk(artistId).then((artist) => {
      if (!artist) {
        res.status(404).json({ error: "The artist could not be found." });
    } else {
        Album.findByPk(albumId).then((album) => {
          if (!album) {
            res.status(404).json({ error: "The album could not be found." });
    } else {
        Song.create({ name: name }).then((song) => {
            song.setArtist(artist).then((song) => {
              song.setAlbum(album).then((song) => {
                res.status(201).json(song);
              });
            });
          });
        }
      });
    }
  });
};

exports.list = (req, res) => {
  Song.findAll({
    include: [
      {
        model: Artist,
        as: "artist",
      },
      {
        model: Album,
        as: "album",
      },
    ],
  }).then((songs) => {
    res.status(200).json(songs);
  });
};

exports.songById = (req, res) => {
  const { id } = req.params;
  Song.findByPk(id, {
  include: [
    {
      model: Artist,
      as: "artist",
    },
    {
      model: Album,
      as: "album",
    },
  ],
})
 .then((song) => {
      if (!song) {
          res.status(404).json({ error: "The song could not be found."});
        } else {
          res.status(200).json(song);
        }
      });
    };
      
  //----------------------------------------------------------------------
  exports.songUpdate = (req, res) => {
    const { id } = req.params;
    Song.update(req.body, { where: { id } })
    .then(([rowsUpdated]) => {
      if (!rowsUpdated) {
        res.status(404).json({ error: 'The song could not be found.' });
      } else {
        res.status(200).json(rowsUpdated);
      }
    });
  };
    //------------------------------------------------------------------------
 exports.removeSong = (req, res) => {
  const { id } = req.params;
  Song.destroy({ where: { id } })
  .then((rowsDeleted) => {
    if (!rowsDeleted) {
      res.status(404).json({ error: "The song could not be found."});
    } else {
      res.status(204).json({ message: "Deleted successfully"});
    }
  });
};
  