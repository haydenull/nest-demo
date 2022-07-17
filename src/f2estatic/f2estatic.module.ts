import { Module } from '@nestjs/common';
import { F2estaticController } from './f2estatic.controller';
import { F2estaticService } from './f2estatic.service';

@Module({
  controllers: [F2estaticController],
  providers: [F2estaticService]
})
export class F2estaticModule {}
