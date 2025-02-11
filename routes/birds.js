const { DESTRUCTION } = require("dns");
const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;

const birds = [
    {
        name: "Cassowary",
        DESTRUCTION: "Right at home. Southern cassowaries inhabit rainforests of northeastern Australia and the island of New Guinea, as well as the Indonesian islands of Ceram and Aru. Generally, cassowaries are associated with dense, tropical rainforest, with a penchant for old growth forest. The southern variety may also be found in lowland forests, savannas, forest edges and riverbanks, and even mangroves and fruit plantations.",
        image: "./images/cassowary.jpg",
    },
    {
        name: "Kookaburras",
        DESTRUCTION: "In eastern Australia, the raucous cackle of the Laughing Kookaburra is an essential feature of the dawn chorus. They can be heard laughing from the tip of Cape York south to Wilsons Promontory. The species occurrence in other parts of Australia, however, is no laughing matter. Kookaburras were widely introduced into Tasmania and Western Australia where they breed in tree hollows that would usually be used by parrots and owls, and they prey on small reptiles, mammals and nestlings, thus placing undue pressure on those creatures. The Laughing Kookaburra is not really laughing when it makes its familiar call. The cackle of the Laughing Kookaburra is actually a territorial call to warn other birds to stay away.",
        image: "./images/kookaburras.jpg",
    },
    {
        name: "Cockatoos",
        DESTRUCTION: "Woodland, Forest The Yellow-tailed Black-Cockatoo inhabits a variety of habitat types, but favours eucalypt woodland and pine plantations. Small to large flocks can be seen in these areas, either perched or flying on slowly flapping wings.",
        image: "./images/cockatoos.jpg",
    }
];
app.get("/birds",(req,res) =>{
    res.render("pages/birds",{birds:birds});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});