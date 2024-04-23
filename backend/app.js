const express = require('express');
const app = express();
const cors = require('cors');
const helmet =require('helmet');


const port = process.env.PORT || 3200;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(require('./routes/routes'));
app.listen(port,function () {
    console.log('app listening on port:'+port);
});