// install your packages which may include 'path', 'express'(router),
const path = require("path");
const router = require("express").Router();
// get /notes route
router.get(
  "/notes",
  ((req, res) = () => {
    // sendFile()- directory, filename you want to display
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  })
);

// get "*" route
router.get(
  "*",
  ((req, res) = () => {
    // sendFile()- directory, filename you want to display
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })
);

// export the router
module.exports = router;
