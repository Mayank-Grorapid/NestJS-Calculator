import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
            try {
                const privateKey = process.env.privatekey; // Load your private key here
                const decodedToken = jwt.verify(token, privateKey);
                req['user'] = decodedToken; // Attach the decoded user data to the request
            } catch (error) {
                res.send("Invalid Token");
            }
        }
        next();
    }
}
