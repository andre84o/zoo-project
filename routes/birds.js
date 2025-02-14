import express from "express";
import animals from "../data/data.js";

const birdsRouter = express.Router();

birdsRouter.get("/", (req, res) => {
    const category = "Bird";
    const filteredAnimals = animals.filter(animal => animal.group === category);
    
    console.log("Birds list:", filteredAnimals); 

    res.render("pages/animal-page", {
        pageTitle: "Birds",
        selectedAnimal: null,
        animals: filteredAnimals
    });
});

birdsRouter.get("/:name", (req, res) => {
    const category = "Bird";
    const filteredAnimals = animals.filter(animal => animal.group === category);
    const animalName = req.params.name ? req.params.name.toLowerCase() : "";  

    console.log("Requested animal name:", animalName); 

    const selectedAnimal = animals.find(
        animal => animal.name.toLowerCase() === animalName && animal.group === category
    );

    if (!selectedAnimal) {
        console.log("Animal not found:", animalName); 
        return res.status(404).send("Animal not found");
    }

    res.render("pages/animal-page", {
        pageTitle: selectedAnimal.name,
        selectedAnimal: selectedAnimal,
        animals: filteredAnimals
    });
});

export default birdsRouter;
