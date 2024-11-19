console.log("Hello");

//STEP 1 import and init
const express = require("express");
const { posts } = require("./direct.js"); // import direct.js  ES Modules
const postsRouter = require("./routers/posts.js");
const app = express(); // salviamo la istanza principale
const port = 1111; // # porta

//set middlewere .use property
app.use(express.static("public_assets"));

//STEP 3 - rotta principale
app.get("/", (req, res) => {
  console.log("Server del mio blog");
  res.send("Benvenuto al server del mio blog");
});

// STEP 5- Colleguiamo la CRUDE al file posts.js 
app.use("/posts", postsRouter);


//STEP 2  - server ascolta client
app.listen(port, () => {
  console.log(`server in ascolto http://localhost:${port}`);
});
