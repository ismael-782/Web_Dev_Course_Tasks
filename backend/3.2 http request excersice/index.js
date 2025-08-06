import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("main page");
});

app.get("/contact", (req,res) => {
    res.send("about page");
});

app.get("/about", (req,res) => {
    res.send("conact page");
});

app.listen(port, () => {
    console.log("hi");
    
})