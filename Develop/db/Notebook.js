// require uuidv4 package to generate an { id : uuidv4(), title,text  }
const { uuid } = require("uuidv4");
const fs = require("fs");
const db = require("./db.json");
const path = require("path");
const util = require("util");
const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);
class Notebook {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
  getNotes() {
    // inside of this function, you're going to want READ from the db.json
    // the contents of the json file will be displayed on the page
    // to read a file - readFile() which is apart of the "fs" package
    return readFileSync("db/db.json").then((notes) => {
      let newNotes = [];
      try {
        newNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        newNotes = [];
      }
      return newNotes;
    });
  }

  addNotes(note) {
    const { title, text } = note;
    const newNote = { id: uuid(), title, text };
    // inside of this function, you want to use writeFile() from 'fs'
    return this.getNotes()
      .then((notes) => [notes, newNote])
      .then((newNotes) => writeFileSync("db/db.json", JSON.stringify(newNotes)))
      .then(() => newNote);
  }

  deleteNotes(id) {
    addNotes();
  }
  // check against all of the notes to see which on has the id you're looking to delete
  // call getNotes() and then filter the results to find the id you're looking for and return
  // the ones that don't match
}

module.exports = new Notebook();
