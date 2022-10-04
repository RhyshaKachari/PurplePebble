const mongoose = require("mongoose");
const pass = process.env.PASSWORD;
const name = process.env.NAME;

mongoose
  .connect(
    `mongodb+srv://sam:${pass}@purplepebble.ems3e.mongodb.net/${name}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Database Connection Successful`);
  })
  .catch((e) => {
    console.log(`Database Connection Unsuccessful`);
  });
