const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
  cart: [{
    _id: {
      type: String, // or mongoose.Schema.Types.ObjectId if from DB
      required: true,
    },
    selectedSize: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
]
});

module.exports = mongoose.model("Cart", cartSchema);
