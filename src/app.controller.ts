import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Pais } from "./app.service"


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/buscar/:id')
  async buscarDato(@Param('id') id: number): Promise<Pais | undefined> {
    try {
      let PaisEncontrado = await this.appService.BuscarUnPais(Number(id))
      console.log(PaisEncontrado)
      if (!PaisEncontrado) {
        return undefined
      }
      return PaisEncontrado

    } catch (error) {
      console.log(error)
    }
  }
  @Get('/listatodos')
  async ListaDatos() {
    return this.appService.ListarTodosLosDatos()
  }




}
