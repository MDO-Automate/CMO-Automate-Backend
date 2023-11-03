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

export const getFormatDate = (date: string) =>{
    const day = date.split('/')[0]
    const month = date.split('/')[1]
    const year = date.split('/')[2]
    const newDate = new Date(`${year}-${month}-${day}`)
    return newDate
} 

export const getFormatStringDate = (date: string) =>{
    if(date.includes('-')) return date
    const day = date.split('/')[0]
    const month = date.split('/')[1]
    const year = date.split('/')[2]
    const newDate = `${year}-${month}-${day}`
    return newDate
} 

export const getFormatDatatime = (datetime: string) =>{
    if(datetime.includes('-')) return datetime
    const dateTimeSplit = datetime.split(' ')
    const date = dateTimeSplit[0]
    const hours = getFormatHours(dateTimeSplit[1])
    const day = date.split('/')[0]
    const month = date.split('/')[1]
    const year = date.split('/')[2]
    const newDate = `${year}-${month}-${day} ${hours}`
    return newDate
}


export const getFormatHours = (hourString: string)=>{
    const hourSplit = hourString.split(':')
    const hour = hourSplit[0].padStart(2, '0')
    const minutes = hourSplit[1].padStart(2, '0')
    const seconds = hourSplit[1].padStart(2, '0')
    
    return `${hour}:${minutes}:${seconds}`
}

export const firstDayOfMonth = (date: string)=>{
    const dateSplit = date.split('-')
    const year = parseInt(dateSplit[0])
    const month = parseInt(dateSplit[1])
    const dateGenered = new Date(year, month - 1, 1)
    return dateGenered.toJSON().split('T')[0]
}

export const lastDayOfMonth = (date: string)=>{
    const dateSplit = date.split('-')
    const year = parseInt(dateSplit[0])
    const month = parseInt(dateSplit[1])
    const dateGenered =  new Date(year, month, 0)
    return dateGenered.toJSON().split('T')[0]
}