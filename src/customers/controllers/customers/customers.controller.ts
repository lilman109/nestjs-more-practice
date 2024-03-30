import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, ValidationPipe } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get('')
  getAllCustomers() {
    return this.customerService.getAllCustomers()
  }

  // express way
  /* @Get(':id') */
  /* getCustomer( */
  /*   @Param('id', ParseIntPipe) id: number,  */
  /*   @Req() req: Request,  */
  /*   @Res() res: Response, */
  /* ) { */
  /*   const customer = this.customerService.findCustomerById(id); */
  /*   if (customer) { */
  /*     res.send(customer); */
  /*   } else { */
  /*     res.status(400).send({ msg: "Customer not found!" }); */
  /*   } */
  /* } */

  // nestjs way
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id)
    if (customer) return customer
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: Prisma.CustomerCreateInput) {
    return this.customerService.createCustomer(createCustomerDto)
  }
}
