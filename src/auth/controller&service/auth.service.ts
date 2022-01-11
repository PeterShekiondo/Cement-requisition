import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // impot to use jwt token service
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from '../dto/auth-signup-credentials.dto';
import { MailService } from 'src/mail/controller&service/mail.service' 
import { jwtPayload } from '../interfaces/jwt-payload.interface';
import { UserRepository } from '../entity&repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService, // import the jwt service for token generation (this made available once define jwt module in Auth  )
    private mailService: MailService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    try {
      const messageBuilder = this.mailService.createMessageBuilder()
      const mailMessage = messageBuilder.from('eistain94@gmail.com').subject('mail subject').build()
      this.mailService.send(mailMessage, 'cefasway@gmail.com')
      return this.userRepository.signUp(authCredentialsDto);
    } catch (error) {
      // throw new Error("");
      console.log("error on service");
      console.log(error);
            
    }
  }

  async signIn(
    authCredentialsDto: AuthSignInCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const email = await this.userRepository.validatePassword(
      authCredentialsDto,
    );
    if (!email) {
      throw new UnauthorizedException('invalid credentials');
    }
    const payload: jwtPayload = { email }; // generate payload of type jwtPayload to be used to create accessToken
    const accessToken = await this.jwtService.sign(payload); // generate accessToken from the paylaod
    return { accessToken };
  }
}
