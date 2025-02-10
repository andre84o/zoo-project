import express from "express";

const app = express();
app.use(express.static("public"))
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {
        //Här skickar vi med variabler om våra ejs partials kräver data.
        pageTitle: "Home",
        testText: "This text should appear on the homepage",
    });
});

// app.use("/birds", ); //Sätt in birdRouter som andra parameter
// app.use("/heroes", ); //Sätt in mammalsRouter som andra parameter
// app.use("/gods", ); //Sätt in reptilesRouter som andra parameter


app.listen(port, () => console.log(`Server running on port ${port}`));