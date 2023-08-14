import { Module } from '@nestjs/common';
import { ProfesoresController } from './profesores.controller';
import { ProfesoresService } from './profesores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';
import { Clase } from 'src/clases/clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, Estudiante, Clase])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService]
})
export class ProfesoresModule {}
