const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const url = process.env.MONGODB_URI;

console.log(process.env.MONGODB_URI);

mongoose.connect(url);

const Todo = mongoose.model('Todo', {
  content: String,
  completed: Boolean
});

module.exports = Todo;
