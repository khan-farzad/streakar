import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });
    connection.on("error", (e) => {
      console.log("MongoDb error occurred", e);
      process.exit();
    });
  } catch (e) {
    console.log("Something went wrong in connecting mongoDb", e);
  }
}
