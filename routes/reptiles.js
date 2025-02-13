import express from "express";
import Animals from "../data/data.js";

const reptilesRouter = express.Router();


reptilesRouter.get("/", (req, res )=> {
    const category = "Reptile"
    const filteredAnimals = animals.filter(animal => animal.group === category);
    res.render("pages/animal-page",{
    pageTitle: "Reptiles",
    selectedAnimal: null,
    animals: filteredAnimals


    })
    
}); 

reptilesRouter.get("/:name", (req, res) => {
    const category = "Reptile"
    const filteredAnimals = animals.filter(animal => animal.group === category);
    const animalName = req.params.name.toLowerCase();
    const selectedAnimal = animals.find(animal => animal.name.toLowerCase() === animalName && animal.group === category);

    if (!selectedAnimal) {
        return res.status(404).send("Animal not found");
    }
    
    res.render("pages/animal-page", {
        pageTitle: selectedAnimal.name,
        selectedAnimal: selectedAnimal,
        animals: filteredAnimals,
        baseUrl: req.baseUrl

    })
});


export default reptilesRouter;