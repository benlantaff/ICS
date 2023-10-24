const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  unitOfMeasure: String,
  sourcedFrom: String,
  // price: Number,
});

module.exports = mongoose.model("Item", itemSchema);
