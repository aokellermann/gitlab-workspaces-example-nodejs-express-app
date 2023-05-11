const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)

app.set('json spaces', 2)
app.get('/', (req, res) => {
  res.send(`Welcome to GitLab workspace demo NodeJS Express app! <br/><br/>
  You can browse <br/>
  - <a href="https://${req.headers.host}/text">https://${req.headers.host}/text</a> for Text response <br/>
  - <a href="https://${req.headers.host}/json">https://${req.headers.host}/json</a> for JSON response <br/>
  `);
});
app.get('/json', (req, res) => res.status(200).json(req.headers));
app.get('/text', (req, res) => {
  headers = req.headers;
  res.send(Object.keys(headers).map(k => {return k + " : " + headers[k]}).join(" <br/> "));
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Listen and serve.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});