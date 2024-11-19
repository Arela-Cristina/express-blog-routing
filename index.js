console.log("Hello");

//STEP 1 import and init
import express from "express";
import { posts } from "./direct.js"; // import direct.js  ES Modules
const app = express(); // salviamo la istanza principale
const port = 1111; // # porta

//set middlewere .use property
app.use(express.static("public_assets"));

//STEP 3 - rotta principale
app.get("/", (req, res) => {
  console.log("Server del mio blog");
  res.send("Benvenuto al server del mio blog");
});

//STEP 4 - CRUDE
//show
app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Detagli del pasticino ${id}`);
  res.send(`Detagli del pasticino ${id}`);
});

//store
app.post("/", (req, res) => {
  console.log("Creiamo un nuovo pasticino");
  res.send("Creiamo un nuovo pasticino");
});

//update
app.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Aggiornamento pasticino ${id}`);
  res.send(`Aggiornamento pasticino ${id}`);
});

//modify
app.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Aggiornamento parziale pasticino ${id}`);
  res.send(`Aggiornamento parziale pasticino ${id}`);
});

//deleted
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Eliminazione pasticino ${id}`);
  res.send(`Eliminazione  pasticino ${id}`);
});



//STEP 2  - server ascolta client
app.listen(port, () => {
  console.log(`server in ascolto http://localhost:${port}`);
});
