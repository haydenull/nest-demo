import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { F2estaticModule } from './f2estatic/f2estatic.module';

@Module({
  imports: [F2estaticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
