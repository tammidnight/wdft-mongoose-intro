// Frist create schema

const mongoose = require("mongoose");

let StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  country: {
    type: String,
    enum: ["Austria", "UK", "France", "Germany"],
  },
});

// Second create model with that schema

let StudentModel = mongoose.model("student", StudentSchema); // mongoose always adds a 's' at the ende of the collection name -> here student get students

// Third export the model

module.exports = StudentModel;
