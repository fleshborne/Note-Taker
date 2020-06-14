// install your packages which may include 'path', 'express'(router),
const path = require("path");
const router = require("express").Router();
// get /notes route
const sendHtml = (res, filename) => {
  return res.sendFile(path.join(__dirname, "..", "public", filename));
};
router.get("/notes", (req, res) => {
  // sendFile()- directory, filename you want to display
  return sendHtml(res, "notes.html");
});

// get "*" route
router.get("*", (req, res) => {
  // sendFile()- directory, filename you want to display
  return sendHtml(res, "index.html");
});

// export the router
module.exports = router;
