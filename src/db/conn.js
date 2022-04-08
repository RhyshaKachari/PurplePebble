const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/PurplePebble")
  .then(() => {
    console.log(`Database Connection Successful`);
  })
  .catch((e) => {
    console.log(`Database Connection Unsuccessful`);
  });
