import { Module } from '@nestjs/common';
import { EscuelasController } from './escuelas.controller';
import { EscuelasService } from './escuelas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela])],
  controllers: [EscuelasController],
  providers: [EscuelasService]
})
export class EscuelasModule {}
