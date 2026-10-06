import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import basicAuth from 'express-basic-auth'
import {createProxyMiddleware} from 'http-proxy-middleware'

export const Domain = process.env.DOMEN
export const port = process.env.PORT || 3000
export const isDev = process.env.NODE_ENV !== 'production'

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: [
      ''
    ].filter(Boolean),
    credentials: true,
  })

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {enableImplicitConversion: true},
    whitelist: true
  }))

  await app.listen(port, '0.0.0.0');

  logger.log(`Server Running! \n Domain: ${Domain} \n Adress: ${isDev ? `http://${Domain}:${port}` : `https://${Domain}`} \n PORT: ${port}`)
  logger.log(`API Running on: \n GraphiQL: ${isDev ? `http://${Domain}:${port}/graphql` : 'Disable in production'} \n REST: ${isDev ? `http://${Domain}:4000/rest/docs` : `https://${Domain}/rest/docs`} \n       ${isDev ? `http://${Domain}:4000/graphql` : `https://${Domain}/graphql`}`)
}
bootstrap();
