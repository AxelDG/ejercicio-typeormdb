import { Module } from '@nestjs/common';
import { EscuelasController } from './escuelas.controller';
import { EscuelasService } from './escuelas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './escuela.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';
import { Ciudad } from 'src/ciudades/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela, Estudiante, Ciudad])],
  controllers: [EscuelasController],
  providers: [EscuelasService]
})
export class EscuelasModule {}
