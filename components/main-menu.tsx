'use client'

import { MenuIcon } from 'lucide-react'
import useMediaQuery from '../lib/hooks'
import { Drawer, DrawerTrigger, DrawerContent } from './ui/drawer'
import { mainMenuLinks } from '../lib/links'

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header className="z-[900] relative">
      <div className="fixed top-0 w-full h-[5rem] bg-background opacity-80 backdrop-blur-[0.5rem]">
        <nav className="flex justify-between items-center h-[5rem] w-full p-2">
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
      </div>
    </header>
  )
}

// return (
//   <header className="z-[999] relative">
//     <nav className="flex justify-between w-full">
//       <h3>Chris Harley</h3>

//       {isDesktop ? (
//         <ul className="flex gap-4">
//           {mainMenuLinks.map((link, index) => (
//             <li key={link.label}>{link.label}</li>
//           ))}
//         </ul>
//       ) : (
//         <Drawer direction="right">
//           <DrawerTrigger>
//             <MenuIcon />
//           </DrawerTrigger>
//           <DrawerContent>
//             <ul>
//               {mainMenuLinks.map((link, index) => (
//                 <li key={link.label}>{link.label}</li>
//               ))}
//             </ul>
//           </DrawerContent>
//         </Drawer>
//       )}
//     </nav>
//   </header>
// )

{
  /* <header>
{isDesktop ? (
  <nav>
    <h3>Chris Harley</h3>
    <ul>
      {mainMenuLinks.map((link) => (
        <li key={link.label}>{link.label}</li>
      ))}
    </ul>
  </nav>
) : (
  <nav>
    <h3>Chris Harley</h3>
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
  </nav>
)}
</header> */
}

// <nav className="flex justify-between w-full">
//   <h3>Chris Harley</h3>

//   {isDesktop ? (
//     <ul className="flex gap-4">
//       {mainMenuLinks.map((link, index) => (
//         <li key={link.label}>{link.label}</li>
//       ))}
//     </ul>
//   ) : (
//     <Drawer direction="right">
//       <DrawerTrigger>
//         <MenuIcon />
//       </DrawerTrigger>
//       <DrawerContent>
//         <ul>
//           {mainMenuLinks.map((link, index) => (
//             <li key={link.label}>{link.label}</li>
//           ))}
//         </ul>
//       </DrawerContent>
//     </Drawer>
//   )}
// </nav>
