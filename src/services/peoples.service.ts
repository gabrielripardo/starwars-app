import api from './api'
import Person from 'types/peoples.type'
import { ServerResponse } from 'http'

export function getAll() {
    return api
        .get<Array<Person>>('people')
        .then((reponse: any) => reponse.data.results)
        .catch((error: any) => console.log(error))
}
