const express = require("express")
const router = express.Router();
const  {currencyConversion} = require("../controller/homeController");
const {getCompanies} = require("../controller/homeController")

router.post('/currency-conversion-bydate',currencyConversion);
router.get('/list-all-companies',getCompanies);

module.exports = router;