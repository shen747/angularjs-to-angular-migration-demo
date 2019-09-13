// FileName: server.js

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
import { router } from './api-routes'; // import routes

let app = express();// initialize the app

let port = process.env.PORT || 9000;// Setup server port

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

app.use(cors());
// Use Api routes in the App
app.use('/api', router);