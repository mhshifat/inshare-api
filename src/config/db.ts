import mongoose from "mongoose";
import env from "./env";

export default () => {
  mongoose.connect(env.DB.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const connection = mongoose.connection;

  try {
    connection.once("open", () => {
      console.log("Database connected.");
    });
  } catch (err) {
    console.log("Connection failed.");
  }
};
