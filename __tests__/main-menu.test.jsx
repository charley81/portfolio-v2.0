import React from 'react'
import { render, screen } from '@testing-library/react'
import MainMenu from './main-menu'
import useMediaQuery from '../lib/hooks'
import { mainMenuLinks } from '../lib/links'

// Mocking necessary imports
jest.mock('../lib/hooks', () => ({
  __esModule: true,
  default: jest.fn()
}))
jest.mock('next/link', () => {
  return ({ children }) => {
    return children
  }
})

describe('MainMenu', () => {
  it('renders without crashing', () => {
    useMediaQuery.mockImplementation(() => false)
    render(<MainMenu />)
    expect(screen.getByText('Chris Harley')).toBeInTheDocument()
  })

  describe('Desktop Menu', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => true)
    })

    it('renders desktop menu when isDesktop is true', () => {
      render(<MainMenu />)
      mainMenuLinks.forEach((link) => {
        expect(screen.getByText(link.label)).toBeInTheDocument()
      })
    })
  })

  describe('Mobile Drawer', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => false)
    })

    it('renders drawer trigger when isDesktop is false', () => {
      render(<MainMenu />)
      // Assuming the DrawerTrigger contains a button or icon with a specific label or testId
      expect(screen.getByTestId('drawer-trigger')).toBeInTheDocument()
    })
  })
})
