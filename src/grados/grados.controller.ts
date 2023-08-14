import {Get, Post, Delete, Body, Controller, Param, ParseIntPipe, Put} from '@nestjs/common';
import { GradosService } from './grados.service';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { CreateGradoDto } from './dto/create-grado.dto';
import { Grado } from './grado.entity';


@Controller('grados')
export class GradosController {
    constructor(private gradosService: GradosService) {}

  @Get()
  getGrados(): Promise<Grado[]> {
    return this.gradosService.getGrados();
  }

  @Get(':id')
  getClase(@Param('id', ParseIntPipe) id: number) {
    return this.gradosService.getGrado(id);
  }

  @Post()
  createGrado(@Body() newGrado: CreateGradoDto) {
    return this.gradosService.createGrado(newGrado);
  }

  @Delete(':id')
  deleteGrado(@Param('id', ParseIntPipe) id: number) {
    return this.gradosService.deleteGrado(id);
  }

  @Put(':id')
  updateGrado(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    grado: UpdateGradoDto,
  ) {
    return this.gradosService.updateGrado(id, grado);
  }
}