const express = require('express');
const path = require('path');
const app = express();

const users = {
  'admin@example.com': 'admin',
  'user1@example.com': 'user',
  'user2@example.com': 'user'
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
  const email = req.body.email.trim().toLowerCase();

  if (users[email] === 'admin') {
    res.redirect('/admin.html');
  } else if (users[email] === 'user') {
    res.redirect('/user.html');
  } else {
    res.send('<h2>Unauthorized Email</h2><a href="/">Try Again</a>');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});