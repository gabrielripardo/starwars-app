import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchBar from '..'
import { list } from 'services/api'
import './matchMedia.mock'

const props = {
    rows: list()
}

describe('<SearchBar />', () => {
    // it('Deve renderizar corretamente', () => {
    //     render(<SearchBar />)

    //     expect(screen.getByRole('input')).toHaveAttribute(
    //         'placeholder',
    //         'Search by name'
    //     )
    // })

    it('Deve renderizar o width corretamente', () => {
        const { container } = render(<SearchBar />)

        expect(container.firstChild?.firstChild).toHaveStyle({
            width: '500'
        })
    })
    // it('should change color to red on toggle click', () => {
    //     const { container, getAllByTestId } = render(<SearchBar />)

    //     // Replace <YOUR_DIV_ID> by your component's id
    //     const contentDiv = document.getElementById('<YOUR_DIV_ID>')
    //     const style = window.getComputedStyle(contentDiv[0])
    //     expect(style.color).toBe('blue') // Sometimes, only rgb st
    // })
})
