import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { Repository } from 'typeorm';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}

  async createEstudiante(estudiante: CreateEstudianteDto) {
    const estudianteFound = await this.estudianteRepository.findOne({
      where: {
        name: estudiante.name,
      },
    });

    if (estudianteFound) {
      return new HttpException('Student already exist', HttpStatus.CONFLICT);
    }
    const newEstudiante = this.estudianteRepository.create(estudiante);
    return this.estudianteRepository.save(newEstudiante);
  }

  getEstudiantes() {
    return this.estudianteRepository.find({
      relations: ['clases'],
    });
  }

  async getEstudiante(id: number) {
    const estudianteFound = await this.estudianteRepository.findOne({
      where: {
        id,
      },
      relations: ['clases'],
    });

    if (!estudianteFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return estudianteFound;
  }

  async deleteEstudiante(id: number) {
    const estudianteFound = await this.estudianteRepository.findOne({
      where: {
        id,
      },
    });

    if (!estudianteFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return this.estudianteRepository.delete(estudianteFound.id);
  }

  async updateEstudiante(id: number, estudiante: UpdateEstudianteDto) {
    const estudianteFound = await this.estudianteRepository.findOne({
      where: {
        id,
      },
    });

    if (!estudianteFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    const updateEstudiante = Object.assign(estudianteFound, estudiante);
    return this.estudianteRepository.save(updateEstudiante);
  }
}
