const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 4545;
const userRouter = require("./routes/user");
// IMP : Dont forget to write password after userName
// change DB at last.
const URL = "mongodb+srv://root:root@studdb.k5xrfbq.mongodb.net/test";

const connect = async () => {
  try {
    // Connect func for the connection of the mongoDB & mongoose.
    await mongoose.connect(URL);
    console.log("Conneced with Mongoose");
  } catch (error) {
    console.log(error);
  }
};
connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => console.log("App Running on ", PORT));
