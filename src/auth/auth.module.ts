import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controller&service/auth.controller';
import { AuthService } from './controller&service/auth.service';
import { UserRepository } from './entity&repository/user.repository';
import { JwtStrategy } from './jwtStrategies/jwt.strategy';
import { MailModule } from 'src/mail/mail.module';
import * as config from 'config';

const jwtConfig = config.get('jwt')

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // import and register passportModule
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: {
        expiresIn: process.env.JWT_SECRET || jwtConfig.expiresIn,
      },
    }), //import and register JwtModule and configure secret and expiration time.
    TypeOrmModule.forFeature([UserRepository]),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule], // export modules so they may be able to be used by other modules
})
export class AuthModule {}
