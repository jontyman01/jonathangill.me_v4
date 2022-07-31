import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">

              <span className="block">&bull;</span>

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