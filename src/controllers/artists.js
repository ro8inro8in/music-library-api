const { Artist } = require('../models');

exports.create = (req, res) => {
  Artist.create(req.body).then(artist => res.status(201).json(artist));
}
exports.list = (req, res) => {
    Artist.findAll().then(artists => res.status(200).json(artists))
}
exports.byId = (req, res) => {
    Artist.findByPk(req.params.id)
    .then((artist) => {
        if (!artist) {
            res.status(404).json({ error: "The artist could not be found."});
          } else {
            res.status(200).json(artist);
          }
        })
        .catch(err => console.log(err))
    };

exports.updateArtist = (req, res) => {
    const { id } = req.params;
     Artist.update(req.body, { where: { id } })
     .then(([rowsUpdated]) => {
        if (!rowsUpdated) {
            res.status(404).json({ error: 'The artist could not be found.'});
        } else {
            res.status(200).json(rowsUpdated);
      }
   });
};

   // Remove artist not checked will go into this tomorrow 
   exports.removeArtist = (req, res) => {
    const { id } = req.params;
    Artist.destroy({ where: { id } }).then(rowsDeleted => {
        if (!rowsDeleted) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(204).json({ message: 'Success files deleted.' });
        }
    })
    .catch(err => console.log(err))
};