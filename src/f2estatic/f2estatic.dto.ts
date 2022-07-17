import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
  @ApiProperty({ description: '项目 ID' })
  @IsNotEmpty({ message: 'id: 项目 ID 不能为空' })
  readonly id: string;

  @ApiProperty({ description: '项目名称' })
  @IsNotEmpty({ message: 'name: 项目名称不能为空'})
  readonly name: string;

  readonly description?: string;
  readonly path?: string;
  readonly url?: string;
}