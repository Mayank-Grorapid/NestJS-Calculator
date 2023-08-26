import { Body, Controller, Post } from "@nestjs/common";
import { CalculatorService } from "./calculator.service";

@Controller('/calculate')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) { }

    @Post()
    calculate(@Body() requestBody: { expression: string }) {
        return this.calculatorService.calculate(requestBody.expression);
    }
}