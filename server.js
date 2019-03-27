const config = require('./config');
const api = require('./api')
const express = require('express');
const app = express();

app.use(express.json())

// app.all('/', (req, res) => {
//     res.json({
//         "name": "Exploratory data analysis"
//     })
//     res.end()
// })

//API
app.use('/api', api)

//server
app.listen(config.port, function(){
    console.log(`server listen in port ${config.port}`);
  });