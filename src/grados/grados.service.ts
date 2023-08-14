import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { Grado } from './grado.entity';


@Injectable()
export class GradosService {
  constructor(
    @InjectRepository(Grado)
    private gradoRepository: Repository<Grado>,
  ) {}

  async createGrado(grado: CreateGradoDto) {
    const gradoFound = await this.gradoRepository.findOne({
      where: {
        name: grado.name
      }
    })

    if (gradoFound) {
      return new HttpException('Grade already exists', HttpStatus.CONFLICT)
    }

    const newGrado = this.gradoRepository.create(grado)
    return this.gradoRepository.save(newGrado)
  }

  getGrados() {
    return this.gradoRepository.find({
      relations: ['escuelas', 'estudiantes'],
    });
  }

  async getGrado(id: number) {
    const gradoFound = await this.gradoRepository.findOne({
      where: {
        id,
      },
      relations: ['escuelas', 'estudiantes'],
    });

    if (!gradoFound) {
      return new HttpException('Grade not found', HttpStatus.NOT_FOUND);
    }

    return gradoFound;
  }

  async deleteGrado(id: number) {
    const gradoFound = await this.gradoRepository.findOne({
      where: {
        id,
      },
    });

    if (!gradoFound) {
      return new HttpException('Grade not found', HttpStatus.NOT_FOUND);
    }

    return this.gradoRepository.remove(gradoFound);
  }

  async updateGrado(id: number, clase: UpdateGradoDto) {
    const gradoFound = await this.gradoRepository.findOne({
      where: {
        id,
      },
    });

    if (!gradoFound) {
      return new HttpException('Grade not found', HttpStatus.NOT_FOUND);
    }

    const updateGrado = Object.assign(gradoFound, clase);
    return this.gradoRepository.save(updateGrado);

    /*Object.assign(escuelaFound, escuela);
      return this.ciudadRepository.save(escuelaFound);*/
  }
  
}
