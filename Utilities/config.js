require('dotenv').config({path:__dirname+'/.env'}) // must have to reach .env file through all files


const PORT = process.env.PORT || 3000

const DB_C = process.env.DB_C

const SECRET= process.env.SECRET
console.log(DB_C)

module.exports = {PORT, DB_C, SECRET}

