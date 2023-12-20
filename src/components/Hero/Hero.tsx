import Typed from "react-typed"
import "./hero.scss"
import "../UI/elements.scss"

const Hero = () => {
  return (
    <header id="hero" className="mx-5 md:mx-0">
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2 uppercase">
            Unleash the Power of Data
          </p>
          <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold md:py-6">
            Power of Data with Analytics
          </h1>
          <div className="box-blur" />
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-md font-bold py-4">
              Your Data Insights
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Partner", "Aegis", "Protector"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-lg font-bold text-[#00df9a]">
            Guiding You Through the Mesmerizing Data Insight Odyssey to Fuel
            Your Success
          </p>
          <a
            href="/#solutions"
            type="button"
            className="start-btn bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto sm:py-3 py-2  text-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
