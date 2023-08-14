import { Module } from '@nestjs/common';
import { ProfesoresController } from './profesores.controller';
import { ProfesoresService } from './profesores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';
import { Grado } from 'src/grados/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, Estudiante, Grado])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService]
})
export class ProfesoresModule {}
