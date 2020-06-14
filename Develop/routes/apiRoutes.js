const { v4: uuidv4 } = require("uuid");
// require express
const router = require("express").Router();
// require the class file so you can use those functions, Notebook.js
const notebook = require("../db/Notebook");
// require fs
const fs = require("fs");

// get request for /api/notes
router.get("/notes", (req, res) => {
  notebook
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});
router.post("/notes", (req, res) => {
  notebook
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
router.delete("/notes/:id", function (req, res) {
  // delete request for /api/notes/:id
  notebook.deleteNotes();
});
module.exports = router;
