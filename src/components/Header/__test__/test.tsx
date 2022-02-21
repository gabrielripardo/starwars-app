import { render, screen } from '@testing-library/react'

import Header from '..'

describe('<Header />', () => {
    it('should render correctly', () => {
        render(<Header />)

        expect(screen.getByRole('link')).toHaveAttribute('href', '/')

        expect(screen.getByText(/Star Wars Persons/i)).toBeInTheDocument()
    })
})
