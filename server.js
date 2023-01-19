const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
