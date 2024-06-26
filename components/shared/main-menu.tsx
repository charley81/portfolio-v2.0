'use client'

import { MenuIcon } from 'lucide-react'
import useMediaQuery from '../../lib/hooks'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerDescription
} from '../ui/drawer'
import { mainMenuLinks } from '../../lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <header className="z-[900] relative">
      <motion.div
        className="fixed top-0 left-0 right-0 w-full bg-background opacity-80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex justify-between items-center  mx-auto w-full p-4 md:max-w-[768px] lg:max-w-[1024px]">
          <h3 className="font-bold">Chris Harley</h3>

          {isDesktop ? (
            <ul className="flex gap-4">
              {mainMenuLinks.map((link) => (
                <motion.li
                  key={link.label}
                  className="cursor-pointer hover:text-muted-foreground transition"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}
                >
                  <Link href={link.section}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger>
                <MenuIcon aria-label="Menu Icon" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle hidden>Menu</DrawerTitle>
                  <DrawerDescription hidden>Navigation Menu</DrawerDescription>
                </DrawerHeader>
                <ul className="p-4">
                  {mainMenuLinks.map((link, index) => (
                    <li
                      key={link.section}
                      className="pb-4 cursor-pointer hover:text-muted-foreground transition "
                    >
                      <Link href={link.section}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </DrawerContent>
            </Drawer>
          )}
        </nav>
      </motion.div>
    </header>
  )
}
