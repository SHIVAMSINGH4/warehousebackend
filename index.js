const express = require("express");
const cors = require("cors");
require("./app/config/db.config");
const bodyParser = require('body-parser');
const app = express();

let server = require('http').Server(app);
const hostname = 'http://localhost';

let corsOptions = {
  origin: ["http://localhost:3000"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse request data content type application/json
app.use(bodyParser.json({ limit: '1000mb' }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-Width, Content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to warehouse API" });
});

// routes
require("./app/routes/userRoutes")(app);


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${hostname}:${PORT}`);
});