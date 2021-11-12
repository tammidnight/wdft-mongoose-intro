const mongoose = require("mongoose");

let StudentModel = require("./models/Students.model");

// Create

// Read

// Update

// Delete

mongoose
  .connect("mongodb://localhost:27017/ironhack")
  .then(() => {
    console.log("DB connected");

    // Deletes everything from the DB
    return StudentModel.deleteMany();
  })
  .then(() => {
    // Creates one item
    return StudentModel.create({ name: "Tamara" });
  })
  .then(() => {
    let myData = [
      { name: "Taka", age: 21, country: "France" },
      { name: "Joanne", age: 22 },
      { name: "George", age: 23 },
    ];

    // Create many items
    return StudentModel.insertMany(myData);
  })
  .then(() => {
    // Read
    return StudentModel.find({ name: "Taka" }, { age: 1, _id: 0 }); // second parameter ist projection
  })
  .then(() => {
    // Update
    return StudentModel.updateOne(
      { name: "Joanne" },
      {
        country: "Germany",
        age: 23,
      },
      { runValidators: true }
    ); // first parameter is to find the document, second parameter the thing to update
  })
  .then(() => {
    // Delete
    return StudentModel.deleteOne({ name: "George" });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
