import app from "./app";
import mongoose from "mongoose";

const port = (process.env.PORT as string) || 5000;

mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
});
