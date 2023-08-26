import { IsNotEmpty, IsString } from 'class-validator';

export class CalcAppExpressionDto {
    @IsNotEmpty()
    @IsString()
    expression: string;
}
