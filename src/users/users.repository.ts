import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersRepository {
	constructor() {}

	public async findById(id: string): Promise<any> {}
}
