import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CustomersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
