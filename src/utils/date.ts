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

export const getFormatHours = (hourString: string)=>{
    const hourSplit = hourString.split(':')
    const hour = hourSplit[0].padStart(2, '0')
    const minutes = hourSplit[1].padStart(2, '0')
    const seconds = hourSplit[1].padStart(2, '0')
    
    return `${hour}:${minutes}:${seconds}`
}