import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';
import { Profesor } from 'src/profesores/profesor.entity';
import { Grado } from 'src/grados/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante, Profesor, Grado])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}
