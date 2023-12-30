import { useState, useEffect, useRef } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-scroll"
import "./navbar.scss"
import "../UI/elements.scss"

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNav(false)
    }
  }

  const handleLinkClick = () => {
    setNav(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      className={`sticky top-0 w-full transition duration-500 z-50 ${
        scrolling ? "shadow-navbar" : ""
      }`}
    >
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <div className="w-full text-3xl font-bold text-[#00df9a]">
          <Link
            to="hero"
            href="#hero"
            spy
            smooth
            offset={0}
            duration={1350}
            className="logo cursor-pointer"
          >
            INSIGHT.
          </Link>
        </div>

        <div className="hidden md:flex">
          {["solutions", "features", "services", "aboutus", "contact"].map(
            (section) => (
              <Link
                key={section}
                to={section}
                href={section}
                spy
                smooth
                offset={-95}
                duration={1350}
                className="nav-link m-4 cursor-pointer underline-hover"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ),
          )}
        </div>

        <div
          className="block md:hidden cursor-pointer"
          onClick={handleNav}
          onKeyDown={handleNav}
          aria-hidden="true"
        >
          {nav ? <AiOutlineClose size={35} /> : <RxHamburgerMenu size={35} />}
        </div>

        <div
          className={`fixed flex flex-col top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500 ${
            nav ? "left-0" : "left-[-100%]"
          } z-10`}
          ref={navRef}
        >
          <div className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-7">
            <Link
              to="home"
              href="#home"
              spy
              smooth
              offset={0}
              duration={1350}
              className="logo"
            >
              INSIGHT.
            </Link>
          </div>

          {["solutions", "features", "services", "aboutus", "contact"].map(
            (section) => (
              <Link
                key={section}
                to={section}
                href={section}
                spy
                smooth
                offset={-95}
                duration={1350}
                className="nav-link m-4 w-1/5 cursor-pointer underline-hover"
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
