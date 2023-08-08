import {Get, Post, Delete, Body, Controller, Param, ParseIntPipe, Put} from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { Ciudad } from './ciudad.entity';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Controller('ciudades')
export class CiudadesController {
    constructor(private ciudadesService: CiudadesService) {}

  @Get()
  getCiudades(): Promise<Ciudad[]> {
    return this.ciudadesService.getCiudades();
  }

  @Get(':id')
  getCiudad(@Param('id', ParseIntPipe) id: number) {
    return this.ciudadesService.getCiudad(id);
  }

  @Post()
  createCiudad(@Body() newCiudad: CreateCiudadDto) {
    return this.ciudadesService.createCiudad(newCiudad);
  }

  @Delete(':id')
  deleteCiudad(@Param('id', ParseIntPipe) id: number) {
    return this.ciudadesService.deleteCiudad(id);
  }

  @Put(':id')
  updateCiudad(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    ciudad: UpdateCiudadDto,
  ) {
    return this.ciudadesService.updateCiudad(id, ciudad);
  }
}
