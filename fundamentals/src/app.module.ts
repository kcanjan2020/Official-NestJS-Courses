import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  controllers: [AppController, CoffeesController],
  providers: [AppService],
  imports: [CoffeesModule],
})
export class AppModule {}
