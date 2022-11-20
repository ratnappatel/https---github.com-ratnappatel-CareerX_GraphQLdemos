var graphql=require('graphql');
var mongoose = require('mongoose');

//definition of record in db
var ToDo = mongoose.model('Todo',{
    id: mongoose.Schema.Types.ObjectId,
    title:String,
    completed: Boolean

});

//definition of one object retrievd from DB --> app as graphql object
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
    fields: ()=>({
        todos:{
            type: new graphql.GraphQLList(TodoType),
            resolve: ()=>{
                return new Promise((resolve,reject)=>{
                    ToDo.find(()=>{
                        if(err)
                            reject(err);
                        else
                            resolve(todos);
                    })
                })
            }
        }
    })
})

module.exports =new graphql.GraphQLSchema({
    query:queryType
});