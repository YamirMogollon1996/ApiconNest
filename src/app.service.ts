import { Injectable } from '@nestjs/common';

export interface Pais {
  id: number,
  nombre: string,
  pais: string
}
export let Paises = [
  { "id": 1, "nombre": "Lima", "pais": "Perú" },
  { "id": 2, "nombre": "Bogotá", "pais": "Colombia" },
  { "id": 3, "nombre": "Buenos Aires", "pais": "Argentina" },
  { "id": 4, "nombre": "Ciudad de México", "pais": "México" },
  { "id": 5, "nombre": "Santiago", "pais": "Chile" },
  { "id": 6, "nombre": "Madrid", "pais": "España" },
  { "id": 7, "nombre": "París", "pais": "Francia" },
  { "id": 8, "nombre": "Nueva York", "pais": "Estados Unidos" },
  { "id": 9, "nombre": "Tokio", "pais": "Japón" },
  { "id": 10, "nombre": "Londres", "pais": "Reino Unido" }
]


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  ListarTodosLosDatos() {
    return Paises
  }


  async BuscarUnPais(id: number): Promise<undefined | Pais> {

    let pais = await Paises.find((item) => item.id ===  id )
    if (pais) {
      return pais
    }
    return undefined



  }


}
