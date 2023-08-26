import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entites/user.entity';
import { Repository } from 'typeorm';
import { JwtMiddleware } from 'src/middleware/jwt.middleware';
import { AppEntity } from './calcApp/entites/calcApp.entity';
import { CalcAppModule } from './calcApp/calcApp.module';
import { CalcAppController } from './calcApp/calcApp.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      synchronize: true,
      ssl: true,
      entities: [User, AppEntity]
    }),
    TypeOrmModule.forFeature([User]),
    Repository<User>,
    CalculatorModule, UserModule, CalcAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('calcApp');
  }
}
