console.log("Hello");

import express from "express";
import { posts } from "./direct.js"; // import ES Modules

const app = express(); // salviamo la istanza principale
const port = 666; // # porta
