import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelasModule } from './escuelas/escuelas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { CiudadesModule } from './ciudades/ciudades.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'establecimientos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    EscuelasModule,
    EstudiantesModule,
    ProfesoresModule,
    CiudadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
