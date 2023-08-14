import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { Profesor } from './profesor.entity';

@Injectable()
export class ProfesoresService {
    constructor(
        @InjectRepository(Profesor)
        private profesorRepository: Repository<Profesor>,                                                                             
      ) {}
    
      async createProfesor(profesor: CreateProfesorDto) {
        const profesorFound = await this.profesorRepository.findOne({
          where: {
            teacherName: profesor.teacherName,
          },
        });
    
        if (profesorFound) {
          return new HttpException('Professor already exist', HttpStatus.CONFLICT);
        }
        const newProfesor = this.profesorRepository.create(profesor);
        return this.profesorRepository.save(newProfesor);
      }
    
      getProfesores() {
        return this.profesorRepository.find({
          relations: ['grados'],
        });
      }
    
      async getProfesor(id: number) {
        const profesorFound = await this.profesorRepository.findOne({
          where: {
            id,
          },
          relations: ['grados'],
        });
    
        if (!profesorFound) {
          return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
        }
        return profesorFound;
      }
    
      async deleteProfesor(id: number) {
        const profesorFound = await this.profesorRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!profesorFound) {
          return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
        }
        return this.profesorRepository.delete(profesorFound);
      }
    
      async updateProfesor(id: number, profesor: UpdateProfesorDto) {
        const profesorFound = await this.profesorRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!profesorFound) {
          return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
        }
    
        const updateProfesor = Object.assign(profesorFound, profesor);
        return this.profesorRepository.save(updateProfesor);
      }
}
