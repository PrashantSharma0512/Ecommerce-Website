import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Input, Stack, RadioGroup, Radio } from '@chakra-ui/react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

function DrawerIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
      <Button
        colorScheme='yellow'
        onClick={onOpen}
      >
        <RxHamburgerMenu size={50} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <nav className="absolute top-[11.2rem] left-0 bg-white w-1/5 h-[100vh] border border-black">
              <ul className="list-none flex flex-col justify-center items-center gap-3">
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600 }">Home
                <select name="" id="" className='hidden group'>
                <option>chacha</option>
                <option>chacha</option>
                <option>chacha</option>
                <option>chacha</option>
                </select>
                </Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">About</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Gifts</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Remedies</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Shop</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Healing Stone</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Training</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Our Services</Link></li>
                <li><Link href="#" className="text-2xl text-gray-800 hover:text-blue-600">Contact Us</Link></li>
              </ul>
            </nav>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              <RxCross1 size={40} color='black' className='absolute right-[77.3vw] top-[11.2rem] bg-white border border-black max-sm:top-[4rem] max-sm:right-[10.3rem]  ' />
            </Button>
            {/* <Button colorScheme='blue'>Save</Button>  */}
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerIcon;
