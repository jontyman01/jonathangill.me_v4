import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import useIsMounted from '@/helpers/useIsMounted'
import { useTheme } from "next-themes";

export default function Header() {
  const isMounted = useIsMounted()
  const { theme, setTheme } = useTheme()

  return (
    <header className="py-4 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Jonathan Gill" extraClasses="mb-1 md:mb-0" />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />
            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 h-8 w-8 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0 dark:moon sun"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
          </button>
          </nav>
        </div>
      </Container>
    </header>
  )
}