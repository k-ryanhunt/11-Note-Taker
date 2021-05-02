const path = require("path");
const express = require("express");
const app = express();

module.exports = (app) => {
  app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "Developpublic\notes.html"))
  );
  app.get("/index", (req, res) =>
    res.sendFile(path.join(__dirname, "Developpublicindex.html"))
  );
  app.get("/styles", (req, res) =>
    res.sendFile(path.join(__dirname, "Developpublicassetscssstyles.css"))
  );
  app.get("/indexjs", (req, res) =>
    res.sendFile(path.join(__dirname, "Developpublicassetsjsindex.js"))
  );
};
