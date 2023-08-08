import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { Repository } from 'typeorm';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad } from './ciudad.entity';

@Injectable()
export class CiudadesService {
    constructor(
        @InjectRepository(Ciudad)
        private ciudadRepository: Repository<Ciudad>,
      ) {}
    
      async createCiudad(ciudad: CreateCiudadDto) {
        const ciudadFound = await this.ciudadRepository.findOne({
          where: {
            name: ciudad.name,
          },
        });
    
        if (ciudadFound) {
          return new HttpException('City already exist', HttpStatus.CONFLICT);
        }
        const newCiudad = this.ciudadRepository.create(ciudad);
        return this.ciudadRepository.save(newCiudad);
      }
    
      getCiudades() {
        return this.ciudadRepository.find();
      }
    
      async getCiudad(id: number) {
        const ciudadFound = await this.ciudadRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!ciudadFound) {
          return new HttpException('City not found', HttpStatus.NOT_FOUND);
        }
        return ciudadFound;
      }
    
      async deleteCiudad(id: number) {
        const ciudadFound = await this.ciudadRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!ciudadFound) {
          return new HttpException('City not found', HttpStatus.NOT_FOUND);
        }
        return this.ciudadRepository.delete(ciudadFound);
      }
    
      async updateCiudad(id: number, ciudad: UpdateCiudadDto) {
        const ciudadFound = await this.ciudadRepository.findOne({
          where: {
            id,
          },
        });
    
        if (!ciudadFound) {
          return new HttpException('City not found', HttpStatus.NOT_FOUND);
        }
    
        const updateCiudad = Object.assign(ciudadFound, ciudad);
        return this.ciudadRepository.save(updateCiudad);
      }
}
