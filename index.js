const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("jenkins pipeline automation is successfully done");
});

app.listen(80, () => {
  console.log("Listening on port 80");
});

