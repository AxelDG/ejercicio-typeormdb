import { Module } from '@nestjs/common';
import { ClasesController } from './clases.controller';
import { ClasesService } from './clases.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './clase.entity';
import { Profesor } from 'src/profesores/profesor.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase, Profesor, Estudiante])],
  controllers: [ClasesController],
  providers: [ClasesService]
})
export class ClasesModule {}
