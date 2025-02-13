import express from "express";
import Animals from "../data/data.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res )=> {
    res.render("pages/animal-page",{
        footerinfo: 'Footerns toffla i dig, reptiljävel!'

    })
});

reptilesRouter.get("/")



export default reptilesRouter;