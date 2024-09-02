import Container from '@/components/container'
import { MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';



export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="py-4 bg-gray-800 p-4 md:p-6 rounded-md my-4">
          <div className="flex flex-wrap">
            <div className="md:flex mb-1 md:mb-0">
              <a href="https://www.linkedin.com/in/gilljonathan" target="_blank" className='pb-1 md:pb-0 block md:inline'><AiFillLinkedin className='inline' /> <span className="hover:underline decoration-2 hover:decoration-blue-400 focus:text-gray-500">LinkedIn</span></a>
              <span className="md:block px-3 text-gray-400 hidden md:visible">&bull;</span>

              <a href='https://github.com/jontyman01/jonathangill.me_v4' target="_blank" className='pb-1 md:pb-0 block md:inline'><span className="block"><AiFillGithub className='inline' /> <span className='hover:underline hover:decoration-cyan-500 decoration-2 focus:text-gray-500'>View My Source Code</span></span></a>

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