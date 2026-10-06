import { defineConfig, loadGraphQLHTTPSubgraph } from "@graphql-mesh/compose-cli";

export const composeConfig = defineConfig({
    subgraphs: [
        {
            sourceHandler: loadGraphQLHTTPSubgraph('MyNestAPI', {
                endpoint: 'http://localhost:3000/graphql'
            })
        }
    ]
})