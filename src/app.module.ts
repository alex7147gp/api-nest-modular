import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from "@nestjs/axios"

import * as Joi from "joi"
import { firstValueFrom } from "rxjs"

import axios from "axios"

import { ConfigModule } from "@nestjs/config"

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module"
import { DatabaseModule } from './database/database.module';

import { enviroments } from "./enviroments"
import config from "./config"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || ".env",
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        NAME_MYSQL: Joi.string().required(),
        HOST_MYSQL: Joi.string().required(),
        PORT_MYSQL: Joi.number().required(),
        API_KEY: Joi.number().required()
      }),
    }),
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,  
    {
      provide: "TASKS",
      useFactory: async (http: HttpService) => {
        const request = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/todos"
        })
        const tasks = request.data
        return tasks
      },
      inject: [HttpService],
    }
  ],
})
export class AppModule {}
