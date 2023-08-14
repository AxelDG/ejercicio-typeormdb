import { Module } from '@nestjs/common';
import { GradosController } from './grados.controller';
import { GradosService } from './grados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grado } from './grado.entity';
import { Profesor } from 'src/profesores/profesor.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grado, Profesor, Estudiante])],
  controllers: [GradosController],
  providers: [GradosService]
})
export class ClasesModule {}
