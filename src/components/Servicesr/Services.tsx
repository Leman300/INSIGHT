import SetGoal from "../../assets/set_goal.jpg"
import CelebrateSuccess from "../../assets/celebrate_success.jpg"
import ControlData from "../../assets/control_data.jpg"

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-bold pt-12">
        Services
      </h2>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-11/12"
          src={SetGoal}
          alt="Guy with briefcase looking at his life goal"
        />
        <div className="mt-10 md:mt-0">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
            Set your goal
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
            doloribus pariatur molestiae beatae accusamus nulla quo rem, ea
            minima temporibus officia molestias quos, natus atque? Omnis debitis
            inventore quasi.
          </p>
          <a
            href="/#"
            className="inline-flex items-center text-black bg-[#00df9a] hover:bg-[#14c48c] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="order-1 w-full"
          src={ControlData}
          alt="Women checking the data that comes from printer"
        />
        <div className="mt-10 md:mt-0">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
            Control your data
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eveniet porro illo perferendis corrupti perspiciatis et, molestiae
            nesciunt. Deleniti vel harum explicabo vitae ut consequuntur
            necessitatibus et sunt animi accusantium doloribus amet, laborum
            voluptatum in, obcaecati, ea nam ad. Accusantium.
          </p>
          <a
            href="/#"
            className="inline-flex items-center text-black bg-[#00df9a] hover:bg-[#14c48c] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full"
          src={CelebrateSuccess}
          alt="Party in office because of the success"
        />
        <div className="mt-10 md:mt-0">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
            Celebrate your success!
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione magnam, ea reprehenderit atque eum!
          </p>
          <a
            href="/#"
            className="inline-flex items-center text-black bg-[#00df9a] hover:bg-[#14c48c] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
