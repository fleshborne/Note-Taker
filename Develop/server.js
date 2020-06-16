// require express
const express = require("express");
const app = express();
// set the port
const PORT = process.env.PORT || 3000;
// require htmlRoutes
const htmlRoutes = require("./routes/htmlRoutes");
// require apiRoutes
const apiRoutes = require("./routes/apiRoutes");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the routes
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// start the server

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
