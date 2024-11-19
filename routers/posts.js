const express = require("express"); //importiamo express framework
const router = express.Router(); //invochiamo funzione Router

const { posts } = require("../direct.js"); //importiamo posts Commom Js

//STEP 4 - CRUDE E ROTTA PRINCIPALE

//index
router.get("/", (req, res) => {
  console.log("Index pasticini");
  //   res.send("Index pasticini");
  res.json(posts); //return post in JSON
});

//show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((el) => el.id === id); //trova il oggetto con id ...
  console.log(`Detagli del pasticino ${id}`);
  res.json(post); // ... e ritorna il oggetto completo
});

//store
router.post("/", (req, res) => {
  console.log("Creiamo un nuovo pasticino");
  res.send("Creiamo un nuovo pasticino");
});

//update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Aggiornamento pasticino ${id}`);
  res.send(`Aggiornamento pasticino ${id}`);
});

//modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Aggiornamento parziale pasticino ${id}`);
  res.send(`Aggiornamento parziale pasticino ${id}`);
});

//deleted
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Eliminazione pasticino ${id}`);
  res.send(`Eliminazione  pasticino ${id}`);
});

module.exports = router; //sportiamo router
