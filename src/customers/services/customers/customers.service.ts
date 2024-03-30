import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    {
      id: 1,
      email: 'hoge@example.com',
      createAt: new Date(),
    },
    {
      id: 2,
      email: 'lala@example.com',
      createAt: new Date(),
    },
    {
      id: 3,
      email: 'foo@example.com',
      createAt: new Date(),
    },
    {
      id: 4,
      email: 'blah@example.com',
      createAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find(customer => {
      return customer.id === id
    })
  }
}
