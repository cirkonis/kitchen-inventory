import { Injectable } from '@nestjs/common';
import { ItemModel } from './models/Item.model';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ItemsService {
  async getItem(id: string): Promise<ItemModel> {
    return await prisma.item.findUnique({ where: { id: id } });
  }

  async listItems(): Promise<ItemModel[]> {
    return prisma.item.findMany();
  }

  async createItem(item: ItemModel): Promise<ItemModel> {
    return await prisma.item.create({ data: item });
  }

  async updateItem(item: ItemModel): Promise<ItemModel> {
    return await prisma.item.update({
      where: { id: item.id },
      data: { ...item },
    });
  }

  async deleteItem(id: string): Promise<ItemModel> {
    return await prisma.item.delete({ where: { id: id } });
  }
}
