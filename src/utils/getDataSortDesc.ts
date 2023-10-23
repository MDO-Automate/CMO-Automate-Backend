export const getDataObjectSortDesc = (array: any[], key: string) => {
    return array.sort((a, b) => b[key] - a[key])
}