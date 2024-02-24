const  express  = require("express");
const  app  = express();
const  cron = require('node-cron');
const  bodyParser =  require('body-parser');
const  {fetchAndStoreCryptocurrencies}  =  require('./services/FetchAndStoreCrypto');

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//connection with DATABASE
require("./config/databse").connect();

//Inital Updation While server starts
(async () => {
  try {
    await fetchAndStoreCryptocurrencies();
    console.log('Initial data stored in MongoDB.');
  } catch (error) {
    console.error('Error storing initial data:', error);
  }
})();

//USING CORS TO UPDATE THE DATA EVERY HOUR
cron.schedule('0 * * * *', async () => {
  try {
    await fetchAndStoreCryptocurrencies();
    console.log('Data updated in MongoDB.');
  } catch (error) {
    console.error('Error updating data:', error);
  }
});

app.listen(PORT, (req, res) => {
    console.log(`App is listening at ${PORT}`);
});