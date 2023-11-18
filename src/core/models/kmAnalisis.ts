
export interface KmAnalisis {
    id: number
    idSae: string
    vehiculo: string
    tipo: string
    empleado: string
    linea: number
    itinerario: number
    horaSalida: string
    ht: string
    inicioServicio: string
    finServicio: string
    tiempoViaje: string
    distancia: number
    retraso: number
    expedicion: string
    inicioServicioEfectivo: string
    finServicioEfectivo: string
    tiempoEfectivo: string
    retrasoE: number
    pmr: number
    porcParada: string
    porcDistancia: string
    porcTiempo: string
    km1: number
    km2: number
    km3: number
    km4: number
    media: number
    minor500: boolean
    distanciaYMedia: boolean
    distanciaYParadas: boolean
    fueraHorario: boolean
    malEnrutado: boolean
    kmDistance: number
    incidencia: number
    fecha: string
    obs: string
}
