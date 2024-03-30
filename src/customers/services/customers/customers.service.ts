import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'hoge@example.com',
      name: "hoge hoge",
    },
    {
      id: 2,
      email: 'lala@example.com',
      name: "lala lala",
    },
    {
      id: 3,
      email: 'foo@example.com',
      name: "foo foo",
    },
    {
      id: 4,
      email: 'blah@example.com',
      name: "blah blah",
    },
  ];

  getAllCustomers() {
    return this.customers
  }

  findCustomerById(id: number) {
    return this.customers.find(customer => {
      return customer.id === id
    })
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto)
  }
}
