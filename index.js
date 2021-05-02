const express = require('express');
const Pusher = require("pusher");
const path = require('path');
const keys = require('./config/keys');
const app = express();

app.use(express.json());

const pusher = new Pusher(
  keys.pusherCreds
);

app.use(express.static('public'));

app.get('/hw', (req, res) => {
    pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(keys.port, (err) => {
  if(!err){
    console.log(`listening on ${keys.port}`);
  }
});