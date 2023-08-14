import {Get, Post, Delete, Body, Controller, Param, ParseIntPipe, Put} from '@nestjs/common';
import { ClasesService } from './clases.service';
import { UpdateClaseDto } from './dto/update-clases.dto';
import { CreateClaseDto } from './dto/create-clases.dto';
import { Clase } from './clase.entity';


@Controller('clases')
export class ClasesController {
    constructor(private clasesService: ClasesService) {}

  @Get()
  getClases(): Promise<Clase[]> {
    return this.clasesService.getClases();
  }

  @Get(':id')
  getClase(@Param('id', ParseIntPipe) id: number) {
    return this.clasesService.getClase(id);
  }

  @Post()
  createClases(@Body() newClase: CreateClaseDto) {
    return this.clasesService.createClases(newClase);
  }

  @Delete(':id')
  deleteClases(@Param('id', ParseIntPipe) id: number) {
    return this.clasesService.deleteClase(id);
  }

  @Put(':id')
  updateClases(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    clase: UpdateClaseDto,
  ) {
    return this.clasesService.updateClase(id, clase);
  }
}