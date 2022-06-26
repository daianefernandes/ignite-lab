import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vnr7np1nse01uk6roud96x/master',
    cache: new InMemoryCache(),
})

