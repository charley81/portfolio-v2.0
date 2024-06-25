// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import MainMenu from '../components/main-menu'
// import { mainMenuLinks } from '../lib/links'

// // Mock the useMediaQuery hook
// jest.mock('../lib/hooks', () => ({
//   __esModule: true,
//   default: jest.fn()
// }))

// // Import the mocked hook
// import useMediaQuery from '../lib/hooks'

// describe('MainMenu', () => {
//   it('renders correctly', () => {
//     render(<MainMenu />)
//     expect(screen.getByText('Chris Harley')).toBeInTheDocument()
//   })

//   describe('Desktop view', () => {
//     beforeAll(() => {
//       // Mock as desktop view
//       useMediaQuery.mockImplementation(() => true)
//     })

//     it('displays desktop menu', () => {
//       render(<MainMenu />)
//       expect(screen.getByText(mainMenuLinks[0].label)).toBeInTheDocument()
//       expect(screen.queryByText('Menu')).not.toBeInTheDocument() // Assuming 'Menu' is part of the DrawerTrigger
//     })
//   })

//   describe('Mobile view', () => {
//     beforeAll(() => {
//       // Mock as mobile view
//       useMediaQuery.mockImplementation(() => false)
//     })

//     it('displays the drawer for mobile menu', () => {
//       render(<MainMenu />)
//       expect(screen.getByRole('button')).toBeInTheDocument() // Assuming the DrawerTrigger is a button
//     })

//     it('renders all main menu links in the drawer', () => {
//       render(<MainMenu />)
//       mainMenuLinks.forEach((link) => {
//         expect(screen.getByText(link.label)).toBeInTheDocument()
//       })
//     })
//   })
// })
