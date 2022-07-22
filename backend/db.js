const mongoose = require("mongoose");

const mongoURI = `mongodb://localhost:27017/GalleryViewer`;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to DataBase Successfully");
  });
};
module.exports = connectToMongo;
