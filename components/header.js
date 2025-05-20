import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

import { AiFillMail } from 'react-icons/ai';

export default function Header() {

  return (
    <header className="">
      <Container>
        <div className="flex flex-wrap bg-gray-800 p-4 md:p-6 rounded-md my-4">
          <a href="/" className="text-xl mb-1 md:mb-0 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-400 transition ease-in-out delay-100 duration-200">Jonathan Gill : Product Design Lead</a>

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">

            <a href="mailto:hello@jonathangill.me"><AiFillMail className="inline"/> <span className="transition ease-in-out delay-100 duration-200 hover:underline decoration-indigo-500 focus:text-gray-500 decoration-2">Say Hello</span></a>

          </nav>
        </div>
      </Container>
    </header>
  )
}