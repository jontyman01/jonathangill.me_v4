import Container from '@/components/container'
import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-s">
            <div className="flex space-x-1 mb-1 md:mb-0">

              <a aria-label="Navigate to LinkedIn" className="hover:underline hover:decoration-indigo-500 focus:text-gray-500" href="https://www.linkedin.com/in/gilljonathan" target="_blank" rel="noopener noreferrer">
                Find me on LinkedIn
              </a>

              <span className="block"></span>

              <span className="block">&bull;</span>

              <span className="block"></span>
            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">

            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}