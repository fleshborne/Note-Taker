// require express
const router = require("express").Router();
// require the class file so you can use those functions, Notebook.js
const notebook = require("../db/Notebook");
// require fs
const fs = require("fs");

// get request for /api/notes
router.get("/notes", function (req, res) {
  res.json(notebook.getNotes()).catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", function (req, res) {
  // delete request for /api/notes/:id
  // call deleteNote();
});
module.exports = router;
