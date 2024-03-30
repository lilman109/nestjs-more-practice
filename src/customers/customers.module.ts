import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-custome.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer.account.midleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // can call as much middlware you want
    consumer.apply(ValidateCustomerMiddleware,ValidateCustomerAccountMiddleware).forRoutes({
      path: 'customers',
      method: RequestMethod.GET,
    });

    /* consumer.apply(ValidateCustomerMiddleware).exclude({ */
    /*   path: 'api/customers/search/:id', */
    /*   method: RequestMethod.GET, */
    /* }); */
  }
}
