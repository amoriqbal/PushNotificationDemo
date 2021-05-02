const express = require('express');
const Pusher = require("pusher");
const path = require('path');
const app = express();
app.use(express.json());

const pusher = new Pusher({
  appId: "1194443",
  key: "70b0637b41f78ffb8d23",
  secret: "965a57181c668bee097e",
  cluster: "ap2",
  useTLS: true
});

app.use(express.static('public'));

app.get('/hw', (req, res) => {
    pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(5002, (err) => {
  if(!err){
    console.log("listening on 5002");
  }
});