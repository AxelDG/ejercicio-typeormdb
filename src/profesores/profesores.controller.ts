import {Get, Post, Delete, Body, Controller, Param, ParseIntPipe, Put} from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesores')
export class ProfesoresController {
    constructor(private readonly profesoresService: ProfesoresService) {}

  @Get()
  getProfesores(): Promise<Profesor[]> {
    return this.profesoresService.getProfesores();
  }

  @Get(':id')
  getProfesor(@Param('id', ParseIntPipe) id: number) {
    return this.profesoresService.getProfesor(id);
  }

  @Post()
  createProfesor(@Body() newProfesor: CreateProfesorDto) {
    return this.profesoresService.createProfesor(newProfesor);
  }

  @Delete(':id')
  deleteProfesor(@Param('id', ParseIntPipe) id: number) {
    return this.profesoresService.deleteProfesor(id);
  }

  @Put(':id')
  updateProfesor(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    profesor: UpdateProfesorDto,
  ) {
    return this.profesoresService.updateProfesor(id, profesor);
  }
}
