import {Get, Post, Delete, Body, Controller, Param, ParseIntPipe, Put} from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { Escuela } from './escuela.entity';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Controller('escuelas')
export class EscuelasController {
    constructor(private escuelasService: EscuelasService) {}

  @Get()
  getEscuelas(): Promise<Escuela[]> {
    return this.escuelasService.getEscuelas();
  }

  @Get(':id')
  getEscuela(@Param('id', ParseIntPipe) id: number) {
    return this.escuelasService.getEscuela(id);
  }

  @Post()
  createEstudiante(@Body() newEscuela: CreateEscuelaDto) {
    return this.escuelasService.createEscuela(newEscuela);
  }

  @Delete(':id')
  deleteEscuela(@Param('id', ParseIntPipe) id: number) {
    return this.escuelasService.deleteEscuela(id);
  }

  @Put(':id')
  updateEscuela(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    escuela: UpdateEscuelaDto,
  ) {
    return this.escuelasService.updateEscuela(id, escuela);
  }
}
