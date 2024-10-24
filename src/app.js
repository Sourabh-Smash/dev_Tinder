const express = require("express");
const { connectDb } = require("./config/db.js");
const app = express();
const PORT = 4000;

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Dev Tinder listning to ${PORT}`));
  })
  .catch((err) => console.log("Error occured while connecting to db", err));
