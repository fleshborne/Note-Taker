const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// set the port
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// set the routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// start the server

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
