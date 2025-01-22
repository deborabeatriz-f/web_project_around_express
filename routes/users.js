const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Erro interno no servidor" });
    }

    const users = JSON.parse(data);

    return res.send(users);
  });
});

router.get("/:_id", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Erro interno no servidor" });
    }

    const users = JSON.parse(data);
    const userId = req.params._id;

    const userFound = users.find((item) => item._id === userId);

    if (!userFound) {
      return res.status(404).send({ message: "ID do usuário não encontrado" });
    }

    return res.send(userFound);
  });
});

module.exports = router;
