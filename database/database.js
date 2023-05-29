// requiring the mongoose package
let mongoose = require("mongoose");
// Set the strictQuery option to true for Mongoose to enforce strict mode when executing queries
mongoose.set("strictQuery", true);
require("dotenv").config();

// mongodb provided connection url
const connectionString = process.env.MONGODBURI;

// custom function made to connect the mongodb database and passing up a callback function
const connectDb = (server) => {
  // connecting to the database and then logging out the db-connected message after that the server call back function is passed which will be called and will connect the app to server
  mongoose
    .connect(connectionString, { useNewUrlParser: true })
    .then((res) => console.log("db-connected"))
    .then(() => server())
    .catch((err) => console.log(err));
};

// exporting the connect db method to the app for usage
module.exports = connectDb;
