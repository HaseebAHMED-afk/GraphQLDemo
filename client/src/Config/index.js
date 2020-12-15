import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphQlClient = new ApolloClient({
    uri: "http://localhost:3001",
    cache: new InMemoryCache()
})

export default graphQlClient;  