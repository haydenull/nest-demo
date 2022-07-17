import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { F2estaticService } from './f2estatic.service';

@Controller('f2estatic')
export class F2estaticController {
  constructor(private readonly f2estaticService: F2estaticService) {}

  @Get('project')
  async getProject() {
    const data = await this.f2estaticService.getData();
    return data;
  }

  @Get('project/:id')
  async getProjectById(@Param('id') id: string) {
    const data = await this.f2estaticService.getData();
    return data.find(item => item.id === id);
  }

  @Post('project')
  async createProject(@Body() body) {
    return body;
  }

  @Put('project/:id')
  async updateProject(@Param('id') id: string, @Body() body) {
    return body;
  }

}
