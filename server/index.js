let { ApolloServer } = require('apollo-server')
let typeDefs = require('./Schema/Schema')
let resolvers = require('./Resolvers/index')


let apolloServer = new ApolloServer({typeDefs,resolvers})

apolloServer.listen(3001,() => {
    console.log('Apollo server running at port 3001');
})