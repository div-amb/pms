require('dotenv').config();
const express = require('express');
const color = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT;

const app = express();

// connect to DB
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`));