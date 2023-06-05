const express = require('express');
const app = express();
const routes = require('./api/controllers/userController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://azamikram919:<password>@cluster0.8lg73pm.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
// async function run() {
//     try {
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);


mongoose.connect('mongodb+srv://azamikram919:3WwZzGkDVYWCQjCd@cluster0.8lg73pm.mongodb.net/');
mongoose.connection.on('error', err => {
    console.log('Connection Failed')
});

mongoose.connection.on('connected', connected => {
    console.log('Database Connection Successful...')
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user', routes);

app.use((req, res, next) => {
    res.status(404).json({
        error: 'bad request/url'
    })
});

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'app is running in localhost 3000...'
//     })
// });

module.exports = app;