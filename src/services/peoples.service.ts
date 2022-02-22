import api from './api'
import Person from 'types/peoples.type'

export function getAll() {
    return api
        .get<Array<Person>>('people')
        .then((response: any) => response.data.results)
        .catch((error: any) => console.log(error))
}

export function getByName(keyword: string) {
    return api
        .get<Array<Person>>(`people?search=${keyword}`)
        .then((response: any) => response.data.results)
        .catch((error: any) => console.log(error))
}
