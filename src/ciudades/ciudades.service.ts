import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad } from './ciudad.entity';
import { Repository } from 'typeorm';
import { Escuela } from 'src/escuelas/escuela.entity';

@Injectable()
export class CiudadesService {
    constructor(
        @InjectRepository(Ciudad)
        private ciudadRepository: Repository<Ciudad>,
        @InjectRepository(Escuela) 
        private escuelaRepository: Repository<Escuela>
    ) {}
    
    async createCiudad(ciudad: CreateCiudadDto) {
        const ciudadFound = await this.ciudadRepository.findOne({
            where: {
                city: ciudad.city,
            },
        });

        if (ciudadFound) {
            throw new HttpException('City already exists', HttpStatus.CONFLICT);
        }

        const newCiudad = this.ciudadRepository.create(ciudad);
        return this.ciudadRepository.save(newCiudad);
    }

    async getCiudades() {
        return this.ciudadRepository.find({
            relations: ['escuelas'],
        });
    }

    async getCiudad(id: number) {
        const ciudadFound = await this.ciudadRepository.findOne({
            where: {
                id,
            },
            relations: ['escuelas'],
        });

        if (!ciudadFound) {
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
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
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }

        return this.ciudadRepository.remove(ciudadFound);
    }

    async updateCiudad(id: number, ciudad: UpdateCiudadDto) {
        const ciudadFound = await this.ciudadRepository.findOne({
            where: {
                id,
            },
        });

        if (!ciudadFound) {
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }

        const updateCiudad = Object.assign(ciudadFound, ciudad);
        return this.ciudadRepository.save(updateCiudad);

        /*Object.assign(ciudadFound, ciudad);
        return this.ciudadRepository.save(ciudadFound);*/
    }
}
