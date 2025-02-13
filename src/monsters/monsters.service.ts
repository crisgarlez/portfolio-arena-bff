import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MonstersService {
  constructor(@Inject('MONSTERS_MS') private client: ClientProxy) {}

  async findAll() {
    return this.client.send<any>('get-all-monsters', {});
  }

  async findOne(code: string) {
    return this.client.send<any>('find-monster-by-code', { code });
  }

  async update(code: string, updateMonsterDto: any) {
    console.log('code:' + code);
    return this.client.send<any>('update-monster', {
      code: code,
      payload: updateMonsterDto,
    });
  }

  async remove(code: string) {
    return this.client.send<any>('delete-monster-by-code', { code: code });
  }
}
