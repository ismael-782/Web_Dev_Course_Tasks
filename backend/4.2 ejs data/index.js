import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    var first = req.body.fName;
    var last = req.body.lName;
    var h1 = `your name has ${first.length + last.length} letters`
    res.render("index.ejs", { total: h1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
