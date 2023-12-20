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
          <Link
            to="solutions"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 underline-hover"
          >
            Solutions
          </Link>
          <Link
            to="features"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 underline-hover"
          >
            Features
          </Link>
          <Link
            to="services"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 underline-hover"
          >
            Services
          </Link>
          <Link
            to="aboutus"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 underline-hover"
          >
            About
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 underline-hover"
          >
            Contact
          </Link>
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
          className={
            nav
              ? "fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500 z-10"
              : "fixed flex flex-col top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500 left-[-100%] z-10"
          }
          ref={navRef}
        >
          <div className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-7">
            <Link
              to="home"
              spy
              smooth
              offset={0}
              duration={1350}
              className="logo"
            >
              INSIGHT.
            </Link>
          </div>
          <Link
            to="solutions"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 w-1/5 underline-hover"
            onClick={handleLinkClick}
          >
            Solutions
          </Link>
          <Link
            to="features"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 w-1/5 underline-hover"
            onClick={handleLinkClick}
          >
            Features
          </Link>
          <Link
            to="services"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 w-1/5 underline-hover"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="aboutus"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 w-1/5 underline-hover"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-95}
            duration={1350}
            className="nav-link m-4 w-1/5 underline-hover"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
