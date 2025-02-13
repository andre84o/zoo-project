import express from "express";
import animals from "../data/data.js";
//Behöver vänta på att Andre är klar med att exportera animals.
const mammalsRouter = express.Router();


mammalsRouter.get("/", (req, res) => {
    const category = "mammal";
    const filteredAnimals = animals.filter(animal => animal.type === category);

    res.render("pages/animal-page", {
        pageTitle: "Mammals",
        selectedAnimal: null,
        category: category,
        animals: filteredAnimals
    });
});


mammalsRouter.get("/:name", (req, res) => {
    const category = "mammal";
    const filteredAnimals = animals.filter(animal => animal.type === category);
    const animalName = req.params.name.toLowerCase();
    const selectedAnimal = animals.find(animal => animal.name.toLowerCase() === animalName && animal.type === category);

    if (!selectedAnimal) {
        return res.status(404).send("Animal not found");
    }

    res.render("pages/animal-page", {
        pageTitle: selectedAnimal.name,
        selectedAnimal: selectedAnimal,
        animals: filteredAnimals,
        baseUrl: req.baseUrl
    });
});

export default mammalsRouter;
