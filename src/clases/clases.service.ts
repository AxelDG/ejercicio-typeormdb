import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClaseDto } from './dto/create-clases.dto';
import { UpdateClaseDto } from './dto/update-clases.dto';
import { Clase } from './clase.entity';


@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase)
    private claseRepository: Repository<Clase>,
  ) {}

  async createClases(clase: CreateClaseDto) {
    const claseFound = await this.claseRepository.findOne({
      where: {
        name: clase.name
      }
    })

    if (claseFound) {
      return new HttpException('Class already exists', HttpStatus.CONFLICT)
    }

    const newClase = this.claseRepository.create(clase)
    return this.claseRepository.save(newClase)
  }

  getClases() {
    return this.claseRepository.find({
      relations: ['escuelas', 'estudiantes', 'profesores'],
    });
  }

  async getClase(id: number) {
    const claseFound = await this.claseRepository.findOne({
      where: {
        id,
      },
      relations: ['escuelas', 'estudiantes', 'profesores'],
    });

    if (!claseFound) {
      return new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }

    return claseFound;
  }

  async deleteClase(id: number) {
    const claseFound = await this.claseRepository.findOne({
      where: {
        id,
      },
    });

    if (!claseFound) {
      return new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }

    return this.claseRepository.remove(claseFound);
  }

  async updateClase(id: number, clase: UpdateClaseDto) {
    const claseFound = await this.claseRepository.findOne({
      where: {
        id,
      },
    });

    if (!claseFound) {
      return new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }

    const updateClase = Object.assign(claseFound, clase);
    return this.claseRepository.save(updateClase);
  }
  
}
