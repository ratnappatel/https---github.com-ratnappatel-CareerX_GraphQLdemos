const express=require('express');
const {graphqlHTTP} =require('express-graphql'); // as function
const schema = require('./Schema');
const app= express();
const graphql=require('graphql').graphql;


var query ="query{todos{id,title,completed}}";

/* graphql(schema,query).then(function(result){
    console.log(JSON.stringify(result));
}); */

app.use('/', graphqlHTTP({
    schema,
    pretty: true,
    graphiql:true
}));

app.listen(8080,function(err){
    console.log('Server started on 8080');
});

