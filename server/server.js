let express = require("express");
let app = express();
let cors = require("cors");
const ctrl = require("./controller/controller.js");
app.use(cors());
app.use(express.json());
let port = 4500;

app.listen(port, () => console.log(`Server up and running on ${port}...`));
