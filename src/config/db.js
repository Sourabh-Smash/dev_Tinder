const { mongoose } = require("mongoose");
console.log("hello");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://sourabhmanawat:2yCdE0gwBO9h4Zfs@cluster0.kebbo.mongodb.net/devTinder"
  );
};
module.exports = {connectDb};
connectDb()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error occured while connecting to db", err));
