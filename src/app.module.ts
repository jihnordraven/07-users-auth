import { PrismaModule } from './../prisma/prisma.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SessionsModule } from './sessions/sessions.module'
import { CodesModule } from './codes/codes.module'

@Module({
	imports: [PrismaModule, UsersModule, AuthModule, SessionsModule, CodesModule],
	controllers: [AppController]
})
export class AppModule {}
