import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from '../dto/auth-signup-credentials.dto';
import { MailService } from 'src/mail/controller&service/mail.service' 
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(private mailService: MailService) {
    super();
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {
    companyname,
    codenumber,
    phonenumber,
    country,
    region,
    street,
    address,  
    firstname,
    lastname,
    email, 
    password } = authCredentialsDto;
    const user = new User()
    user.companyname = companyname
    user.codenumber = codenumber
    user.phonenumber = phonenumber 
    user.country = country 
    user.region = region 
    user.street = street 
    user.address = address 
    user.firstname = firstname 
    user.lastname = lastname
    user.email = email
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
      const messageBuilder = this.mailService.createMessageBuilder()
      const mailMessage = messageBuilder.build()
      this.mailService.send(mailMessage, 'eistain94@gmail.com')
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Account already exist');
      } else {
        console.log(error);
        throw new InternalServerErrorException('');
        
      }
    }
  }

  async validatePassword(
    authCredentialsDto: AuthSignInCredentialsDto,
  ): Promise<string> {
    const { email, password } = authCredentialsDto;
    const user = await this.findOne({ email });
    if (user && (await user.validatePassword(password))) {
      return user.email;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
