import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import {useTheme} from "next-themes";
import useIsMounted from '@/helpers/useIsMounted'

export default function Header() {
  const isMounted = useIsMounted()
  const {theme, setTheme} = useTheme()

  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8 dark:bg-red-300">
      <Container>
        <div className="flex flex-wrap">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Jonathan Gill" extraClasses="mb-1 md:mb-0" />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />

            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
          </nav>

          <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {isMounted.current && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>

        </div>
      </Container>
    </header>
  )
}