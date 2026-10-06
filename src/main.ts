import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import basicAuth from 'express-basic-auth'

export const Domen = process.env.DOMEN
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

  // REST API
  const APIAuth = basicAuth({
    challenge: true,
    users: {
      [process.env.APIUSER!]: process.env.APIPASSWORD!
    }
  })

  await app.listen(port, '0.0.0.0');

  logger.log(`Server Running! \n Domen: ${Domen} \n Adress: ${isDev ? `http://${Domen}:${port}` : `https://${Domen}`} \n PORT: ${port}`)
  logger.log(`API Running on: \n GraphiQL: ${isDev ? `http://${Domen}:${port}/graphql` : 'Disable in production'} \n REST: ${isDev ? `http://${Domen}:4000/rest/docs` : `https://${Domen}/rest/docs`} \n       ${isDev ? `http://${Domen}:4000/graphql` : `https://${Domen}/graphql`}`)
}
bootstrap();
