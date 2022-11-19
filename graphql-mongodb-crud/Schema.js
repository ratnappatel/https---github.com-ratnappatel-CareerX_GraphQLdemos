var graphql=require('graphql');
var ToDos =[
    {
        "id": 1,
        "title": "Todos 1",
        "completed": false
    },
    {
        "id": 2,
        "title": "Todos 2",
        "completed": true
    }
]
var TodoType =new graphql.GraphQLObjectType({
    name:'todo',
    fields: function(){
        return {
            id:{type: graphql.GraphQLID},
            title:{type: graphql.GraphQLString},
            completed:{type:graphql.GraphQLBoolean}
        }
    }
})

var queryType =new graphql.GraphQLObjectType({
    name: 'Query',
    fields:function(){
        return{
            todos:{
                type: new graphql.GraphQLList(TodoType),
                resolve: function(){
                    return ToDos;
                }
            }
        }
    }
})

module.exports =new graphql.GraphQLSchema({
    query:queryType
});