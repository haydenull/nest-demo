import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty({ message: 'id: 项目 ID 不能为空' })
  readonly id: string;

  @IsNotEmpty({ message: 'name: 项目名称不能为空'})
  readonly name: string;

  readonly description?: string;
  readonly path?: string;
  readonly url?: string;
}