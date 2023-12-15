
//devuelve si es un día hábil según una fecha
export const getDayType = (date: Date) => {
    const variants = {
        0: 'habil',
        1: 'habil',
        2: 'habil',
        3: 'habil',
        4: 'habil',
        5: 'saturday',
        6: 'sunday'
    }
    const weekDay = date.getDay()
    return variants[`${weekDay}`]
}

//convierte el formato de fecha en yy-mm-aa
export const getFormatDate = (date: string) =>{
    if(date.includes('-')) return new Date(date)
    const day = date.split('/')[0]
    const month = date.split('/')[1]
    const year = date.split('/')[2]
    const newDate = new Date(`${year}-${month}-${day}`)
    return newDate
} 

//convierte el formato de hora en yy-mm-aa devolviendo un formato en string
export const getFormatStringDate = (date: string) =>{
    if(date.includes('-')) return date
    const day = date.split('/')[0].padStart(2, '0')
    const month = date.split('/')[1].padStart(2, '0')
    const year = date.split('/')[2]
    
    const newDate = `${year}-${month}-${day}`
    return newDate
} 

//devuelve un formato dateTime como yy-mm-aa hh:mm:ss
export const getFormatDatatime = (datetime: string) =>{
    if(datetime.includes('-')) return datetime
    if(!datetime.includes('/')) return '2000-01-01 00:00:00'
    const dateTimeSplit = datetime.split(' ')
    const date = dateTimeSplit[0]
  
    const hours = getFormatHours(dateTimeSplit[1])
    const day = date.split('/')[0].padStart(2, '0')
    const month = date.split('/')[1].padStart(2, '0')
    const year = date.split('/')[2]
    const newDate = `${year}-${month}-${day} ${hours}`
    return newDate
}

//devuelve formato de hora agregandole un 0 al comienzo de cada numero si lo necesita 01
export const getFormatHours = (hourString: string)=>{
    if(!hourString) return '00:00:00'
    
    const hourSplit = hourString.split(':')
    const hour = hourSplit[0].padStart(2, '0')
    const minutes = hourSplit[1].padStart(2, '0')
    const seconds = hourSplit[1].padStart(2, '0')
    
    return `${hour}:${minutes}:${seconds}`
}

//devuelve el primer día del mes según una fecha
export const firstDayOfMonth = (date: string)=>{
    const dateSplit = date.split('-')
    const year = parseInt(dateSplit[0])
    const month = parseInt(dateSplit[1])
    const dateGenered = new Date(year, month - 1, 1)
    return dateGenered.toJSON().split('T')[0]
}

//devuelve el ultimo día de un mes según la fecha
export const lastDayOfMonth = (date: string)=>{
    const dateSplit = date.split('-')
    const year = parseInt(dateSplit[0])
    const month = parseInt(dateSplit[1])
    const dateGenered =  new Date(year, month, 0)
    return dateGenered.toJSON().split('T')[0]
}

export const subtractHours = (hour1Str: string, hour2Str: string) => {
    const hour1: any = new Date(`2000-01-01T${hour1Str}`);
    const hour2: any = new Date(`2000-01-01T${hour2Str}`);
  
    const diferencia = hour2 - hour1;
  
    // Obtener horas, minutos y segundos de la diferencia
    const segundos = diferencia / 1000;
    const minutos = segundos / 60;
    const horas = minutos / 60;
  
    return {
      hours: Math.floor(horas),
      minutes: Math.floor(minutos % 60),
      seconds: Math.floor(segundos % 60),
    };
}

//devuelve un booleano si existe una direncia mayor a 5 min.
export const differenceFiveMinutes = (hours1: string, hours2: string)=>{
    const difference = subtractHours(hours1, hours2)
    return difference.hours < 1 && difference.minutes >= 5
}

