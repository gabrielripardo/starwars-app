import axios from 'axios'
import { render, screen } from '@testing-library/react'
import { getAll } from './peoples.service'
import { BASE_URL } from './api'
import { list } from 'services/api'
jest.mock('axios')

test('Api - teste de requisições', async () => {
    await console.log(getAll())
})

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        // const data = list()
        // axios.get.mockImplementationOnce(() => Promise.resolve(data))
        // await expect(fetchData('react')).resolves.toEqual(data)
        // expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}people`)
    })
})
