import { Module } from '@nestjs/common';
import { ProfesoresController } from './profesores.controller';
import { ProfesoresService } from './profesores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService]
})
export class ProfesoresModule {}
