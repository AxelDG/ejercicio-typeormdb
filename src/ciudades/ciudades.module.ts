import { Module } from '@nestjs/common';
import { CiudadesController } from './ciudades.controller';
import { CiudadesService } from './ciudades.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])],
  controllers: [CiudadesController],
  providers: [CiudadesService]
})
export class CiudadesModule {}
