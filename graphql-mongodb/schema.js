const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema}=graphql;

var fakeAuthorDatabase= [
    {name:'Author 1',email:"author1@gmail.com", id:1},
    {name:'Author 2',email:"author2@gmail.com", id:2},
    {name:'Author 3',email:"author3@gmail.com", id:3}
]
const AuthorType=new GraphQLObjectType({
    name: 'Author',
    fields: ()=> ({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLInt}
    })
});

const RootQuery =new GraphQLObjectType({
    name
})