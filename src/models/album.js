
module.exports = (connection, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      //genre: DataTypes.STRING,
      year: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER
    };
  
    const AlbumModel = connection.define('Album', schema);
    return AlbumModel;
  };