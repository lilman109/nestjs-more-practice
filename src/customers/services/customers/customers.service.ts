import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

  findCustomer() {
    return {
      id: 1,
      email: 'floo@example.com',
      createdAt: new Date()
    }
  }
}
