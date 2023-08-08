import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { Repository } from 'typeorm';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Escuela } from './escuela.entity';

@Injectable()
export class EscuelasService {
    constructor(
        @InjectRepository(Escuela)
        private escuelaRepository: Repository<Escuela>,
      ) {}
    
      async createEscuela(escuela: CreateEscuelaDto) {
        const escuelaFound = await this.escuelaRepository.findOne({
          where: {
            name: escuela.name,
          },
        });
    
        if (escuelaFound) {
          return new HttpException('School already exist', HttpStatus.CONFLICT);
        }
        const newEscuela = this.escuelaRepository.create(escuela);
        return this.escuelaRepository.save(newEscuela);
      }
    
      getEscuelas() {
        return this.escuelaRepository.find();
      }
    
      async getEscuela(id: number) {
        const escuelaFound = await this.escuelaRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!escuelaFound) {
          return new HttpException('School not found', HttpStatus.NOT_FOUND);
        }
        return escuelaFound;
      }
    
      async deleteEscuela(id: number) {
        const escuelaFound = await this.escuelaRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!escuelaFound) {
          return new HttpException('Shool not found', HttpStatus.NOT_FOUND);
        }
        return this.escuelaRepository.delete(escuelaFound);
      }
    
      async updateEscuela(id: number, escuela: UpdateEscuelaDto) {
        const escuelaFound = await this.escuelaRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!escuelaFound) {
          return new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
    
        const updateEscuela = Object.assign(escuelaFound, escuela);
        return this.escuelaRepository.save(updateEscuela);
      }
}
