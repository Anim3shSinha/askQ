const mongoose = require("mongoose");

const url =
  "mongodb+srv://animesh:animesh@cluster0.ezibghm.mongodb.net/quoraClone?retryWrites=true&w=majority";

//mongodb+srv://animesh:<password>@cluster0.ezibghm.mongodb.net/<db_name>?retryWrites=true&w=majority

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDb connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
