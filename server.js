const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)

// Start a simple server with two endpoints
app.get('/json', (req, res) => res.status(200).json({status:"ok"}));
app.get('/text', (req, res) => {
  res.send('Hello from Node.js Starter Application!');
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Listen and serve.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});