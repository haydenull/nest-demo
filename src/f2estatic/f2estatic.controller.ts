import { Body, Controller, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './f2estatic.dto';
import { F2estaticService } from './f2estatic.service';

@ApiTags('物理机管理')
@Controller('f2estatic')
export class F2estaticController {
  constructor(private readonly f2estaticService: F2estaticService) {}

  @Get('project')
  async getProject() {
    throw new HttpException('Project already exists', 400);
    const data = await this.f2estaticService.getData();
    return data;
  }

  @ApiOperation({ summary: '获取项目详情' })
  @Get('project/:id')
  async getProjectById(@Param('id') id: string) {
    const data = await this.f2estaticService.getData();
    return data.find(item => item.id === id);
  }

  @Post('project')
  async createProject(@Body() body: CreateProjectDto) {
    return body;
  }

  @Put('project/:id')
  async updateProject(@Param('id') id: string, @Body() body) {
    return body;
  }

}
