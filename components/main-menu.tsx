'use client'

import { MenuIcon } from 'lucide-react'
import useMediaQuery from '../lib/hooks'
import { Drawer, DrawerTrigger, DrawerContent } from './ui/drawer'
import { mainMenuLinks } from '../lib/links'

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header>
      <nav className="flex justify-between">
        <h3>Chris Harley</h3>

        {isDesktop ? (
          <ul className="flex gap-4">
            {mainMenuLinks.map((link, index) => (
              <li key={link.label}>{link.label}</li>
            ))}
          </ul>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <ul>
                {mainMenuLinks.map((link, index) => (
                  <li key={link.label}>{link.label}</li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </header>
  )
}
