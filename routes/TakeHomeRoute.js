const express = require("express")
const router = express.Router();
const  {currencyConversion} = require("../controller/homeController");

router.post('/currency-conversion-bydate',currencyConversion);

module.exports = router;