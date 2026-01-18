const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
//changes from container
const app = express();

app.get('/home', (req, res) => {
    return res.json({message: 'Homecoming'});
});

app.get('/health', (req, res) => {
    return res.json({status: 'healthy'});
});

app.get('/info', (req, res) => {
    return res.json({message:'info'})
});
app.get('/about', (req, res) => {
    return res.json({message:'about'})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Started the server at PORT: ${PORT}`);
});
