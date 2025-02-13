import express from "express";
import Animals from "../data/data.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res )=> {
    res.render("pages/animal-page",{

    })
});

reptilesRouter.get("/")



export default reptilesRouter;