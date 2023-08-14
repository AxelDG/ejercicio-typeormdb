import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { Repository } from 'typeorm';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Escuela } from './escuela.entity';
import { Ciudad } from 'src/ciudades/ciudad.entity';

@Injectable()
export class EscuelasService {
  constructor(
    @InjectRepository(Escuela)
    private escuelaRepository: Repository<Escuela>,
  ) {}

  async createEscuela(escuela: CreateEscuelaDto) {
    const escuelaFound = await this.escuelaRepository.findOne({
      where: {
        school: escuela.school,
      },
    });

    if (escuelaFound) {
      return new HttpException('School already exists', HttpStatus.CONFLICT);
    }

    const newEscuela = this.escuelaRepository.create(escuela);
    return this.escuelaRepository.save(newEscuela);
  }

  getEscuelas() {
    return this.escuelaRepository.find({
      relations: ['clases'],
    });
  }

  async getEscuela(id: number) {
    const escuelaFound = await this.escuelaRepository.findOne({
      where: {
        id,
      },
      relations: ['clases'],
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
      return new HttpException('School not found', HttpStatus.NOT_FOUND);
    }

    return this.escuelaRepository.remove(escuelaFound);
  }

  async updateEscuela(id: number, escuela: UpdateEscuelaDto) {
    const escuelaFound = await this.escuelaRepository.findOne({
      where: {
        id,
      },
    });

    if (!escuelaFound) {
      return new HttpException('School not found', HttpStatus.NOT_FOUND);
    }

    const updateEscuela = Object.assign(escuelaFound, escuela);
    return this.escuelaRepository.save(updateEscuela);
  }
  
}