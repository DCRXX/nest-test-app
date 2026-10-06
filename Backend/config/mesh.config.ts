import { defineConfig, loadGraphQLHTTPSubgraph } from "@graphql-mesh/compose-cli";

export const composeConfig = defineConfig({
    subgraphs: [
        {
            sourceHandler: loadGraphQLHTTPSubgraph('MyNestAPI', {
                endpoint: 'https://nest-test-app-production.up.railway.app/graphql'
            })
        }
    ]
})