const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app =express();

app.use('/graphql',graphqlHTTP({ 
    schema,
    graphql:true}));

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});