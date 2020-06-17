const util = require("util");
const fs = require("fs");
// require uuidv4 package to generate an { id : uuidv4(), title,text  }
const { uuid } = require("uuidv4");

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);
class Notebook {
  read() {
    // this will return notes, utf8 is default but we will call it regardless for encoding
    return readFileSync("db/db.json", "utf8");
  }
  write(note) {
    //   allows for notes to be written to the db.json in string form
    return writeFileSync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    // inside of this function, you're going to want READ from the db.json
    // the contents of the json file will be displayed on the page
    // to read a file - readFile() which is apart of the "fs" package
    return this.read().then((notes) => {
      let newNotes;
      try {
        newNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        newNotes = [];
        // tutor said this is a good way to catch the error in case the array doesn't exist
      }
      return newNotes;
    });
  }

  addNotes(note) {
    const { title, text } = note;
    // cited from review, validation on the back end is good practice
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    // assigns content of notes
    const newNote = { title, text, id: uuid() };
    // inside of this function, you want to use writeFile() from 'fs'
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
    // here we're returning new notes written, saving them to the pre-existing array
    // then writes the new note to the db/.json file
  }

  deleteNotes(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }

  // check against all of the notes to see which on has the id you're looking to delete
  // call getNotes() and then filter the results to find the id you're looking for and return
  // the ones that don't match
}

module.exports = new Notebook();
