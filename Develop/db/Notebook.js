// require uuidv4 package to generate an { id : uuidv4(), title,text  }
const { uuid } = require("uuidv4");
class Notebook {
  // getNotes()
  // inside of this function, you're going to want READ from the db.json
  // the contents of the json file will be displayed on the page
  // to read a file - readFile() which is apart of the "fs" package
  // addNotes()
  // inside of this function, you want to use writeFile() from 'fs'
  // deleteNotes()
  // check against all of the notes to see which on has the id you're looking to delete
  // call getNotes() and then filter the results to find the id you're looking for and return
  // the ones that don't match
}
