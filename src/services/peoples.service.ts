import api from './api'
import Person from 'types/peoples.type'

export function getAll() {
    return api
        .get<Array<Person>>('people')
        .then((response: any) => response.data.results)
        .catch((error: any) => console.log(error))
}

export function getByName(keyword: string, page: number) {
    return api
        .get<Array<Person>>(`people?search=${keyword}&page=${page}`)
        .then((response: any) => response.data)
        .catch((error: any) => console.log(error))
}
