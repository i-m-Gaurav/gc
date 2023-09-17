// const mongoose = require("mongoose");
import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  type: {
    type: String,
    enum: ["user", "admin"]
  },
  image: String
});


module.exports = mongoose.models.User || mongoose.model("User",userSchema);

