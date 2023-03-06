var express = require("express");
var app = express();
const path = require("path");

const staticPath = path.join(__dirname, "../public");

// build-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the express");
});

app.listen(8000, () => {
  console.log("Listening");
});
