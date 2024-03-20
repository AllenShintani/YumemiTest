import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../pages/App'

describe('App', () => {
  it('renders the Vite and React logos', () => {
    render(<App />)
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    expect(viteLogo).to.exist
    expect(reactLogo).to.exist
  })
})
