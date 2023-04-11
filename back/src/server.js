require("dotenv").config()
const express = require('express');
const server = express();
const PORT = 3001;
const router =require("./routes/index")
const {conn}= require("../src/DB_connection")

server.use(express.json());

server.use('/', router);

conn.sync().then(()=>
console.log("Database synced successfully"),
   server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
}))


