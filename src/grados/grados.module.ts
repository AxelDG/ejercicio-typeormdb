import { Module } from '@nestjs/common';
import { GradosController } from './grados.controller';
import { GradosService } from './grados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grado } from './grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grado])],
  controllers: [GradosController],
  providers: [GradosService]
})
export class ClasesModule {}
