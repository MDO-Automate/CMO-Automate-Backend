import { KmAnalisis } from '@models/kmAnalisis'


export const getDataKm = (data: any): KmAnalisis[] => {
   return data.map((item: any, index ) => {
        if(index > 1) {
          return {
            idSae: item.__EMPTY, 
            vehiculo: item.__EMPTY_1,
            tipo: item.__EMPTY_2,
            empleado: item.__EMPTY_3,
            linea: item.__EMPTY_4,
            itinerario: item.__EMPTY_5,
            horaSalida: item.__EMPTY_6,
            ht: item.__EMPTY_7,
            inicioServicio: item.__EMPTY_8,
            finServicio: item.__EMPTY_9,
            tiempoViaje: item.__EMPTY_10,
            distancia: item.__EMPTY_11,
            retraso: item.__EMPTY_12,
            expedicion: item.__EMPTY_13,
            inicioServicioEfectivo: item.__EMPTY_14,
            finServicioEfectivo: item.__EMPTY_15,
            tiempoEfectivo: item.__EMPTY_16,
            retrasoE: item.__EMPTY_17,
            pmr: item.__EMPTY_18,
            porcParada: item.__EMPTY_19,
            porcDistancia: item.__EMPTY_20,
            porcTiempo: item.__EMPTY_21,
          }
        }
      }).filter(item => item != null) 
}

export const getDataKmByVeh = (data: KmAnalisis[], vehicle: string)=>{
  const contador = data.reduce((acumulator, item )=>  {
    if(item.vehiculo == vehicle){ 
      if(item.km1)  return acumulator + item.km1
      if(item.km2)  return acumulator + item.km2
      if(item.km3)  return acumulator + item.km3
      if(item.km4)  return acumulator + item.km4
    }
    return acumulator
  }, 0 )

  return contador
}

export const getDataKmByItinerary = (data: KmAnalisis[], itinerary: string)=>{
  const contador = data.reduce((acu, item) =>  (item[itinerary]|| 0) + acu, 0)
  return contador / 1000
}