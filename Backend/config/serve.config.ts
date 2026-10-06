import { defineConfig } from "@graphql-hive/gateway";
import { useSofa } from '@graphql-yoga/plugin-sofa'

export const gatewayConfig = defineConfig({
    plugins: (ctx) => [
        useSofa({
            ...ctx,
            basePath: '/rest',
            swaggerUI: {
                endpoint: '/docs',
            },
            openAPI: {
                info: {
                    title: 'Test Nest App - REST API (via Mesh)',
                    version: '1.0.0'
                },
                endpoint: '/rest/openapi.json',
            }
        })
    ]
})