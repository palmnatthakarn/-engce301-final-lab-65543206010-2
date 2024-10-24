const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

// place holder for the data
const users = [
  {
    firstName: "ภีมวัจน์",
    lastName: " ทรายตา",
    email: "pimmawat_sa65@live.rmutl.ac.th",
    position: ""
  },
  {
    firstName: "ณัฐกานต์",
    lastName: "แก้วสามต่อ",
    email: "natthakarn_ka65@live.rmutl.ac.th",
    position: ""
  },
  {
    firstName: "ณัฐสิทธิ์",
    lastName: "มูลพุ่มสาย",
    email: "natthasit_mu65@live.rmutl.ac.th",
    position: ""
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../htdocs/lab01/myreact/build'))); 

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../../htdocs/lab01/myreact/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});