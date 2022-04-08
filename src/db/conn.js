const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sam:2HPpnBE6fObkLYKM@purplepebble.ems3e.mongodb.net/PurplePebble?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database Connection Successful`);
  })
  .catch((e) => {
    console.log(`Database Connection Unsuccessful`);
  });
