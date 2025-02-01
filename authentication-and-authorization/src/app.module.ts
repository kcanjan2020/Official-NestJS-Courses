import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoffeesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
