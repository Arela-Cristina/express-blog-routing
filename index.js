console.log("Hello");

//STEP 1 import and init
import express from "express";
import { posts } from "./direct.js"; // import direct.js  ES Modules
const app = express(); // salviamo la istanza principale
const port = 666; // # porta

//set middlewere .use property
app.use(express.static("public_assets"));

//STEP 3 - rotta principale
app.get("/", (re, res) => {
  console.log("Server del mio blog");
  res.send("Benvenuto al server del mio blog");
});

//STEP 2  - server ascolta client
app.listen(port, () => {
  console.log(`server in ascolto http://localhost:${port}`);
});
