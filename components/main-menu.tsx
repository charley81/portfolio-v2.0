'use client'

import { MenuIcon } from 'lucide-react'
import useMediaQuery from '../lib/hooks'
import { Drawer, DrawerTrigger, DrawerContent } from './ui/drawer'

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return isDesktop ? (
    <div>desktop</div>
  ) : (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>Some drawer content in here</DrawerContent>
      </Drawer>
    </div>
  )
}
