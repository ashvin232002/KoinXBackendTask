
//  get the currency symbol by its ID
async function getCurrencySymbolByID
(currencyID) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${currencyID}`);
        const result  = await response.json();
        return result.symbol; 
    } catch (error) {
        throw new Error('An error occurred while fetching .');
    }
}

module.exports = { getCurrencySymbolByID };