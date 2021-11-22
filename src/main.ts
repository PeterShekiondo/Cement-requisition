import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  if(process.env.NODE_ENV === 'development'){
    app.enableCors(); // allow cross origin from all the host
  }
  const port = process.env.PORT || serverConfig.port; // pick env port or the one difined in the yml config file
  await app.listen(port);
}
bootstrap();
  