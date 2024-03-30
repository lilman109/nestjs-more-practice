import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CustomersService {
  constructor(private readonly dataService: DatabaseService) {}

  getAllCustomers() {
    return this.dataService.customer.findMany();
  }

  findCustomerById(id: number) {
    return this.dataService.customer.findUnique({
      where: {
        id,
      },
    });
  }

  createCustomer(createCustomerDto: Prisma.CustomerCreateInput) {
    return this.dataService.customer.create({ data: createCustomerDto });
  }
}
