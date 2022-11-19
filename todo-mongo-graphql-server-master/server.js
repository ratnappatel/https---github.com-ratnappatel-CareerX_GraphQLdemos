var express = require('express')
var Schema = require('./schema')
const  graphqlHTTP  = require('express-graphql')

var app = express()
app.use('/', graphqlHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}),);
app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`GraphQL Server is now running on localhost:${process.env.PORT || 8080}`)
})
