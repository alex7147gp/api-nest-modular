import { Injectable, NotFoundException, Inject } from '@nestjs/common';


import { ConfigService } from "@nestjs/config"
import { User } from '../entities/users.entity';
import { Order } from "../entities/orders.entity"
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { ProductsService } from "./../../products/services/products.service"

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService
  ) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'correo@mail.com',
      password: '12345',
      role: 'admin',
    },
  ];

  findAll() {
    const dateBaseName = this.configService.get("API_KEY")
    console.log(dateBaseName)
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }

  findOrder(id: number): Order{
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return {
      date: new Date,
      user,
      products: this.productsService.findAll()
    };
  }
}
