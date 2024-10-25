const express = require("express");
const { connectDb } = require("./config/db.js");
const {User} =require("./models/user.js");
const app = express();
const PORT = 4000;

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sourabh",
    lastName: "Sharma",
    emailId: "sourabh@gmai.com",
    password: "123",
    gender: "Male",
    age: 21,
  };
  const user = new User(userObj);
  user.save();
  res.send("user created");
});

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Dev Tinder listning to ${PORT}`));
  })
  .catch((err) => console.log("Error occured while connecting to db", err));
