import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [HttpModule,
    ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal: true
  }),
    TodoModule,
    AuthModule,
    MongooseModule.forRoot(process.env.URL_BD),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
