import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '..'
import { list } from 'services/api'
import './matchMedia.mock'

// const props = {
//     rows: list()
// }

// describe('<SearchBar />', () => {
//     // it('Deve renderizar corretamente', () => {
//     //     render(<SearchBar />)

//     //     expect(screen.getByRole('input')).toHaveAttribute(
//     //         'placeholder',
//     //         'Search by name'
//     //     )
//     // })

//     it('Deve clicar no botão de pesquisa', () => {
//         render(<SearchBar />)
//         userEvent.click(screen.getByRole('button'))
//     })
// })
