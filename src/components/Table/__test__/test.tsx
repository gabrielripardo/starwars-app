import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from '..'
import { list } from 'services/api'
import './matchMedia.mock'

const props = {
    rows: list()
}

describe('<Table />', () => {
    it('Deve renderizar corretamente', () => {
        render(<Table rows={props.rows} />)

        // expect(screen.getByRole('heading', { name: /lista/i }))
    })
})
