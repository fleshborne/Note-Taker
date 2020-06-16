const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const db = path.join(__dirname, "../db/db.json");
// const note = { uuid, title, text };

// get request for /api/notes
// READ
router.get("/notes", function (req, res) {
  console.log("RETRIEVED NOTES");
  res.sendFile(db);
});

// CREATE
router.post("/notes", (req, res) => {
  // let notes = JSON.parse(fs.readFileSync(db));
  const newNote = req.body;
  const notesArray = [];
  notesArray = JSON.parse(fs.readFileSync(db));
  newNote.id = uuidv4();
  notesArray.push(newNote);
  // return string and write file
  const notesString = JSON.stringify(notesArray);
  fs.writeFile(db, notesString, (err) => {
    if (err) {
      throw err;
    }
  });
  res.json(notesString);
  console.log("NOTE POSTED");
});
router.delete("/notes/:id", (req, res) => {
  //   // delete request for /api/notes/:id
  fs.readFile(db, (err, data) => {
    if (err) {
      throw err;
    }
  });
  //   let notesArray = [];
  //   let newNote = req.body;
  //   fs.readFile(db, (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     notesArray = JSON.parse(data);
  //     // filter through the notes to delete items by id
  //   });
  //   const filterToDelete = notesArray.filter((note) => {
  //     return note.id !== req.params.id;
  //   });
  //   fs.writeFile(db, JSON.stringify(filterToDelete), (err) => {
  //     if (err) {
  //       throw err;
  //     }
  //   });
  //   //  return notes array after user note is deleted
  //   res.json(newNote);
});
module.exports = router;
