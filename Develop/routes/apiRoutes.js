const router = require("express").Router();
const notebook = require("../db/Notebook");
// get request for /api/notes
// remember crud
// READ
router.get("/notes", (req, res) => {
  notebook
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
  console.log("RETRIEVED NOTES");
});

// CREATE
router.post("/notes", (req, res) => {
  notebook
    .addNotes(req.body)
    .then(() => res.json(note))
    .catch((err) => res.status(500).json(err));
  console.log("NOTE POSTED");
});
router.delete("/notes/:id", (req, res) => {
  notebook
    .deleteNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
  console.log("NOTE DELETED");
});
module.exports = router;
