
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is running"
  });
});

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Node Js Web Server</title>
      </head>
      <body>
        <h1>Hello world! I'm a Node/Express Js web server...</h1>
      </body>
    </html>
  `);
});

module.exports = app;
