import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should render the h1', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Vite + React' }),
    ).toBeInTheDocument()
  })
})
