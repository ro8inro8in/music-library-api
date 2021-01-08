const { Album, Artists } = require("../models");

exports.create = (req, res) => {
  const data = req.body;
  data.ArtistId = req.params.id;
  //console.log(album);
  Album.create(req.body).then((album) => res.status(201).json(album));
};
exports.list = (req, res) => {
  Artists.findAll().then((artists) => res.status(200).json(artists));
};

exports.albumCreate = (req, res) => {
  console.log(req.params.id)
  Album.findByPk(req.params.id)
   .then((res) => {
          expect(res.status).to.equal(404);
          expect(res.body.error).to.equal('The artist could not be found.');
          Album.findAll().then((albums) => {
            expect(albums.length).to.equal(0);
            done();
          });
        }).catch(error => done(error));
};
