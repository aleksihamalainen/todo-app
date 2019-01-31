const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const Todo = require('./models/todo');

app.use(bodyParser.json());
app.use(express.static('build'));
app.use(cors());

const formatTodo = todo => ({
  content: todo.content,
  completed: todo.completed,
  id: todo._id
});

app.get('/api/activities', (req, res) => {
  Todo.find({}).then(todos => res.json(todos.map(formatTodo)));
});

app.get('/api/activities/:id', (req, res) => {
  Todo.findById(req.params.id).then(todo => res.json(formatTodo(todo)));
});

app.post('/api/activities', (req, res) => {
  const body = req.body;

  if (body.content === undefined) {
    return res.status(400).json({ error: 'content missing' });
  }

  const activity = new Todo({
    content: body.content,
    completed: body.completed
  });

  return activity.save().then(savedTodo => res.json(formatTodo(savedTodo)));
});

app.put('/api/activities/:id', (req, res) => {
  const body = req.body;

  const todo = {
    content: body.content,
    completed: body.completed
  };

  Todo.findByIdAndUpdate(req.params.id, todo, { new: true }).then(updatedTodo => {
    formatTodo(updatedTodo);
  });
});

app.delete('/api/activities/:id', (req, res) => {
  Todo.findByIdAndRemove(req.params.id).then(() => {
    res.status(204).end();
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
