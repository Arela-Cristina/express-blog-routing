console.log("Hello");

import express from "express";
import { posts } from "./direct.js"; // import direct.js  ES Modules
const app = express(); // salviamo la istanza principale
const port = 666; // # porta








app.listen(port, () => {
  //server ascolta client
  console.log(`server in ascolto http://localhost:${port}`);
});
