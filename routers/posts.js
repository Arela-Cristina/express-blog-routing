const express = require("express"); //importiamo express framework
const router = express.Router(); //invochiamo funzione Router

//STEP 4 - CRUDE E ROTTA PRINCIPALE

//index
router.get("/", (req, res) => {
  console.log("Index pasticini");
  res.send("Index pasticini");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Detagli del pasticino ${id}`);
  res.send(`Detagli del pasticino ${id}`);
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
