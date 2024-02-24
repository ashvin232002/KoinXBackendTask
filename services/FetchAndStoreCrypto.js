const express =  require("express");
const Crypto =  require("../models/Crypto");


exports.fetchAndStoreCryptocurrencies = async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        const cryptocurrencies = await response.json();

        await Crypto.deleteMany({});

        for(const crypto of cryptocurrencies ){
            if(crypto.symbol && crypto.name && crypto.id){
                const newCrypto =  new Crypto(crypto);
                await newCrypto.save();
            }
        }

        console.log("DATA INSERTED SUCCESSFULLY");
    } catch (error) {
       console.log("Error While Inserting",error);
    }
}
