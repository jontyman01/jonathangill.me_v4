import Container from '@/components/container'
import { MdLocationOn } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="py-4 bg-gray-800 p-4 md:p-6 rounded-md my-4">
          <div className="flex flex-wrap">
            <div className="flex space-x-1 mb-1 md:mb-0">
            <a href="https://www.linkedin.com/in/gilljonathan" target="_blank"><AiFillLinkedin className='inline'/> <span className="hover:underline decoration-2 hover:decoration-cyan-600 focus:text-gray-500">LinkedIn</span></a>
            <span className="block px-3 text-gray-400">&bull;</span>

              <a href='github.com/----'><span className="block"><AiFillGithub className='inline' /> <span className='hover:underline hover:decoration-indigo-500 decoration-2 focus:text-gray-500'>View Source Code</span></span></a>

            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">
    <span className="block"><MdLocationOn className='inline' /> Nottingham, UK </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}