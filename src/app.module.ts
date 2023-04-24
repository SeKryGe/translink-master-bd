import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal: true
  }),
    TodoModule,
    MongooseModule.forRoot(process.env.URL_BD)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
