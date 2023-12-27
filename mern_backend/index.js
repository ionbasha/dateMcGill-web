const PORT = 8000;
const express = require('express')
const { MongoClient }  = require('mongodb')
const app = express();
const uri = 'mongodb+srv://ionbasha:Jellybean2015!@cluster0.6qu3wj8.mongodb.net/?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.json("Hello to my app!")
})

app.post('/createaccount', (req, res) => {
    const client = new MongoClient(uri);

    

    
})

app.listen(PORT, () => {console.log("Change made on port 8000")})