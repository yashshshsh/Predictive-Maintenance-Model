const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
const port = 4076;

app.use('/modelRequest',require('./KRoutes/KReqRoutes'));

app.listen(port,()=>{
    console.log(`This demo deploy app is listening at port http://localhost:${port}`);
})
