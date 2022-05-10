const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST!!");
  res.send("HELLO, GOT YOUR REQUEST")
});

app.listen(8080, () => {
  console.log("LISTEN ON PORT 8080");
});
