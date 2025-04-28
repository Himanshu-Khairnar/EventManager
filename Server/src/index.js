import dotenv from "dotenv";
import { app } from "./app.js";
import { DBConnect } from "./DBconnection/DBConnect.js";
dotenv.config({
  path: "./.env",
});

DBConnect()
  .then((res) => {
    app.listen(8000, () => {
      console.log( "Server started and Connected to DATABASE");
    });
  })
  .catch((error) => {
    console.log(
      error,
      "Error in starting server and error in connecting Database"
    );
  });
