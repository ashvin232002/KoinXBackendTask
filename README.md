# KoinXBackendTask


## Tasks

### Task 1

1. Get the names and ids of all cryptocurrencies and store it in a MongoDB database. You can use Coingecko’s APIs to get the list of all cryptocurrencies: [Coingecko API Documentation](https://www.coingecko.com/api/documentation).
2. Write a background job that keeps this list updated every 1 hour.

### Task 2

1. Build an API that takes the Coingecko IDs of 2 cryptocurrencies and returns the price of one currency in another on a particular date.

### Task 3

1. Integrate Coingecko’s `/companies/public_treasury` API to get the list of companies that hold a particular cryptocurrency.
2. Schema of the API:

**Request Example:**


**Input/output for Task 2 and Task 3:**
```json
Input for Task 2
{
	"fromCurrency": "bitcoin",
	"toCurrency": "ethereum",
	"date": "13-01-2022"
}


**OUTPUT for task 2:**
{
    "success": true,
    "data": {
        "fromCurrency": "bitcoin",
        "toCurrency": "ethereum",
        "date": "13-01-2022",
        "price": 13.02015040396135
    }
}


INPUT for task 3
{
    "currency":"bitcoin"
}

OUTPUT for task 3
{
    "success": true,
    "data": [
        "MicroStrategy Inc.",
        "Galaxy Digital Holdings",
        "Marathon Digital Holdings",
        "Tesla, Inc.",
        "Hut 8 Mining Corp",
        "Coinbase Global, Inc",
        "Block Inc.",
        "Riot Platforms, Inc",
        "Hive Blockchain",
        "CleanSpark Inc.",
        "NEXON Co Ltd",
        "Exodus Movement Inc",
        "Meitu Inc",
        "Bit Digital, Inc",
        "Bitfarms Limited",
        "NFT Investments PLC",
        "Cipher Mining",
        "DMG Blockchain Solutions Inc.",
        "Neptune Digital Assets Corp.",
        "BIGG Digital Assets Inc.",
        "Advanced Bitcoin Technologies AG",
        "FRMO Corp.",
        "The Brooker Group",
        "DigitalX",
        "LQwD Technologies Corp",
        "Cypherpunk Holdings Inc",
        "Core Scientific",
        "Mogo Inc."
    ]
}

