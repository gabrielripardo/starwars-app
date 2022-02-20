import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from '.'

const props = {
    rows: ['row1', 'row2', 'row3']
}

describe('<Table />', () => {
    it('Deve renderizar corretamente', () => {
        render(<Table rows={props.rows} />)

        expect(screen.getByRole('heading', { name: /lista/i }))
        expect(screen.getByText(/next/i)).toBeInTheDocument()
        expect(screen.getByText(/previous/i)).toBeInTheDocument()
    })
})
