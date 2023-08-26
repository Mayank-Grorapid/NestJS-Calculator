import { Injectable } from "@nestjs/common";

@Injectable()
export class CalculatorService {
    calculate(expression) {
        const result = eval(expression);
        return { result };
    }
}