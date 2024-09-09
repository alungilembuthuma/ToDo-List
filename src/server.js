// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// API routes
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, username, password, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error creating user' });
    } else {
      res.send({ message: 'User created successfully' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, username, password, (err, row) => {
    if (err) {
      res.status(500).send({ message: 'Error logging in' });
    } else if (!row) {
      res.status(401).send({ message: 'Invalid username or password' });
    } else {
      res.send({ message: 'Logged in successfully' });
    }
  });
});

app.get('/api/todo', (req, res) => {
  db.all(`SELECT * FROM todo`, (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching todo items' });
    } else {
      res.send(rows);
    }
  });
});

app.post('/api/todo', (req, res) => {
  const { item } = req.body;
  db.run(`INSERT INTO todo (item) VALUES (?)`, item, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error creating todo item' });
    } else {
      res.send({ message: 'Todo item created successfully' });
    }
  });
});

app.put('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  db.run(`UPDATE todo SET item = ? WHERE id = ?`, item, id, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error updating todo item' });
    } else {
      res.send({ message: 'Todo item updated successfully' });
    }
  });
});

app.delete('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM todo WHERE id = ?`, id, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error deleting todo item' });
    } else {
      res.send({ message: 'Todo item deleted successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});