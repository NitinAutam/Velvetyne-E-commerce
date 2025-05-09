// Import the mongoose library, which allows us to define schemas and interact with MongoDB
const mongoose = require('mongoose');
// Define a schema (blueprint) for what a "Post" document will look like in the MongoDB collection
const PostSchema = mongoose.Schema({
  // The 'title' field must be a string and is required
  title: {
    type: String,
    required: true
  },
  // The 'content' field must also be a string and is required
  content: {
    type: String,
    required: true
  },
  // The 'date' field is a timestamp. If not provided, it will default to the current date/time
  date: {
    type: Date,
    default: Date.now
  }
});
// Registers the schema as a model named "Posts" which maps to a MongoDB collection
module.exports = mongoose.model('Posts', PostSchema);
