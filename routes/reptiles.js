import express from "express";
import Animals from "../data/data.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res )=> {
    res.render("pages/animal-page",{
    

    })
    
});

reptilesRouter.get("/frill-necked-lizard",(req, res) =>
    let animalReptile = reptile[0];
    res.render("pages/animal-page", {

    })
)

reptilesRouter.get("/")



export default reptilesRouter;