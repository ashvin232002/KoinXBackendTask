const  Crypto = require("../models/Crypto");

const {getCurrencySymbolByID} = require("../services/getCurrencySymbolByID")

exports.currencyConversion =  async (req,res)=>{
    try{
         const {fromCurrency,toCurrency,date} = req.body;

         if(!fromCurrency || !toCurrency || !date){
            return res.status(400).json({
                success:false,
                message:"Please Enter All The details "
            })
         }

        
         
         console.log('Helloji')
         const url = `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}&localization=false`;
         console.log(url)
         const result = await fetch(url);
         const response =  await result.json();
       
         if(!response.market_data || !response.market_data.current_price){
            return res.status(400).json({
                success:false,
                message: "No Data Available for this currency"
            })
         }

         const toCurrencySymbol =  await getCurrencySymbolByID(toCurrency);

         const convertedCurrency =  response.market_data.current_price[toCurrencySymbol];


         if(!convertedCurrency){
            return res.status(400).json({
                success:"false",
                message:"Price conversion is Not available"
            })
         }

         const data =  {
            fromCurrency,
            toCurrency,
            date,
            price:convertedCurrency
        }

        console.log(data);
         return res.status(200).json({
            success:true,
            data:data
         })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error While Currency Conversion"
        })
    }
}