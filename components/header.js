import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import { useTheme } from "next-themes";

export default function Header() {


  return (
    <header className="">
      <Container>
        <div className="flex flex-wrap bg-gray-800 p-4 rounded-md my-4">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Jonathan Gill : UI/UX Designer" extraClasses="text-xl mb-1 md:mb-0 font-bold" />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <a href="https://www.linkedin.com/in/gilljonathan" target="_blank" className="hover:underline hover:decoration-indigo-500 focus:text-gray-500">Find Me On LinkedIn</a>
            <span className="block">&bull;</span>

            <a href="mailto:jonathangill.me" className="hover:underline hover:decoration-indigo-500 focus:text-gray-500">Say Hello</a>

          </nav>
        </div>
      </Container>
    </header>
  )
}