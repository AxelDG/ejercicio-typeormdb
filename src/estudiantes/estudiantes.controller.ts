import {Get, Post, Delete, Patch, Body, Controller, Param, ParseIntPipe} from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private estudiantesService: EstudiantesService) {}

  @Get()
  getEstudiantes(): Promise<Estudiante[]> {
    return this.estudiantesService.getEstudiantes();
  }

  @Get(':id')
  getEstudiante(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.getEstudiante(id);
  }

  @Post()
  createEstudiante(@Body() newEstudiante: CreateEstudianteDto) {
    return this.estudiantesService.createEstudiante(newEstudiante);
  }

  @Delete(':id')
  deleteEstudiante(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.deleteEstudiante(id);
  }

  @Patch(':id')
  updateEstudiante(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    estudiante: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.updateEstudiante(id, estudiante);
  }
}
