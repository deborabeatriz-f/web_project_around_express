const User = require("../models/user");

function createUser(req, res) {
  const { name, about, avatar } = req.body;

  if (!(name && about && avatar)) {
    return res.status(400).send({ message: "Dados inválidos" });
  }

  return User.create({ name, about, avatar })
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).send({ message: err.message }));
}

function findUsers(req, res) {
  return User.find({})
    .then((users) => {
      if (!users) {
        return res.status(404).send({ message: "Usuários não encontrados" });
      }
      return res.status(200).json(users);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
}

function findUserById(req, res) {
  const userId = req.params.id;
  return User.findById({ _id: userId })
    .then((users) => {
      if (!users) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      return res.status(200).json(users);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
}

module.exports = { createUser, findUsers, findUserById };
