import { Module } from '@nestjs/common';
import { CiudadesController } from './ciudades.controller';
import { CiudadesService } from './ciudades.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './ciudad.entity';
import { Escuela } from 'src/escuelas/escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad, Escuela])],
  controllers: [CiudadesController],
  providers: [CiudadesService]
})
export class CiudadesModule {}
