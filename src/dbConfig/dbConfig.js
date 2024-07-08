import mongoose from "mongoose";

// qpnetwork
// ne54XN4QshTo1SUO
// mongodb+srv://qpnetwork:<password>@cluster0.ctzvywk.mongodb.net/

export async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://qpnetwork:ne54XN4QshTo1SUO@cluster0.ctzvywk.mongodb.net/qpnetwork"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB connected!");
    });

    connection.on("error", (err) => {
      console.log("Mongodb connection error: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong in dbConfig!");
    console.log(error);
  }
}
