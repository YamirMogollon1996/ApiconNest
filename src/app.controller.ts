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

  @Get('/listatodos')
  async ListaDatos() {  
    console.log("asfsdf")
    return this.appService.ListarTodosLosDatos()
  }


  @Get('/buscar/:id')
  async buscarDato(@Param('id') id: number): Promise<Pais | undefined> { 


    console.log("mogollon Oosrio")

    try {

      let PaisEncontrado = await this.appService.BuscarUnPais(id)
      if (!PaisEncontrado) {
        return undefined
      }
      return PaisEncontrado

    } catch (error) {
      console.log(error)
    }
  }


}
