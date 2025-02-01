const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const cardsPath = path.join(__dirname, "../data/cards.json");


router.get("/", (req, res) => {
  fs.readFile(cardsPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return res.status(404).send({ message: "Card não encontrado" });
    }

    const cards = JSON.parse(data);

    return res.send(cards);
  });
});

module.exports = router;
