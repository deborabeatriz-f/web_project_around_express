const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    require: true,
    validator: {
      function(value) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
      },
      message: "Link inválido",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
