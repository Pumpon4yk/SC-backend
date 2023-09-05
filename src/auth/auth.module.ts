import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        },
      },
    ]),
    ConfigModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
