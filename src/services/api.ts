import json from './peoples-mock.json'
import axios from 'axios'

export const BASE_URL = 'https://swapi.dev/api/'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
})

export function list() {
    return json.results
}
