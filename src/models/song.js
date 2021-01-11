module.exports = (connection, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
     // year: DataTypes.INTEGER,
    };
  
    const SongModel = connection.define("Song", schema);
    return SongModel;
  };