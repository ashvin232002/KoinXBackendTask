const  express  = require("express");
const  app  = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/databse").connect();

app.listen(PORT, (req, res) => {
    console.log(`App is listening at ${PORT}`);
  });