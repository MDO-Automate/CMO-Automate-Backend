export const getDataKm = (data: any) => {
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