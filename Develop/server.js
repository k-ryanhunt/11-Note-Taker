const express = require("express");
const APIRoute = require("./Routes/APIRoute.js");
const HTMLRoute = require("./Routes/HTMLRoute.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(APIRoute);
app.use(HTMLRoute);

app.listen(PORT, () =>
  console.log(`App listening on PORT: http://localhost:${PORT}`)
);