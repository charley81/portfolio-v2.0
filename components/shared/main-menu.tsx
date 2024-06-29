'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { MenuIcon } from 'lucide-react'
import useMediaQuery from '../../lib/hooks'
import { Drawer, DrawerTrigger, DrawerContent } from '../ui/drawer'
import { mainMenuLinks } from '../../lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function MainMenu() {
  const { activeSection, setActiveSection } = useActiveSectionContext()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <header className="z-[900] relative">
      <motion.div
        className="fixed top-0 left-0 w-full bg-background opacity-80 backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex justify-between items-center mx-auto w-full px-2 pt-8 sm:max-w-[628px] md:max-w-[728px] lg:max-w-[1028px]">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Chris Harley
          </h2>

          {isDesktop ? (
            <ul className="flex gap-4">
              {mainMenuLinks.map((link) => (
                <motion.li
                  key={link.label}
                  className={cn(
                    'cursor-pointer font-medium hover:text-muted-foreground transition  pb-1',
                    {
                      'text-muted-foreground': activeSection === link.label
                    }
                  )}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}
                  onClick={() => setActiveSection(link.label)}
                >
                  <Link href={link.section}>
                    {link.label}
                    {link.label === activeSection && (
                      <motion.span
                        className="block bg-muted-foreground h-1 mt-1"
                        layoutId="activeSection"
                        transition={{
                          type: 'sprint',
                          stiffness: 380,
                          damping: 30
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger>
                <MenuIcon aria-label="Menu Icon" />
              </DrawerTrigger>
              <DrawerContent>
                <ul className="p-4">
                  {mainMenuLinks.map((link) => (
                    <li
                      key={link.section}
                      className="pb-4 cursor-pointer hover:text-muted-foreground transition"
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
