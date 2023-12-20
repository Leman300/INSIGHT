import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

interface NumberProps {
  n: number
}

function Number({ n }: NumberProps) {
  const [ref, inView] = useInView()

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <animated.div ref={ref}>
      {number.to((numberValue) => numberValue.toFixed(0))}
    </animated.div>
  )
}

const Stats = () => {
  return (
    <section id="stats">
      <div
        className="bg-no-repeat bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581084324492-c8076f130f86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0" />
        <div className="relative wrapper py-24 sm:py-32 text-white px-10 z-10">
          <p className="text-[#00df9a] md:text-3xl sm:text-2xl text-xl font-bold mt-10 mb-5 text-left">
            Our track record
          </p>
          <h2 className="md:w-3/5 w-full md:text-4xl sm:text-3xl text-2xl font-bold mb-4 text-left">
            Thousands of creators worldwide place their trust in us
          </h2>
          <p className="md:w-4/5 w-full md:text-xl sm:text-lg text-md font-light text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            voluptas incidunt sunt fugiat illo aliquid blanditiis! Possimus
            facere tempore modi!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between items-center my-20">
            <div className="border-l-2 ps-4 mt-5 lg:mt-0">
              <h3 className="text-3xl md:text-4xl">
                <div className="flex">
                  <Number n={5} /> .000
                </div>
              </h3>
              <p className="text-md sm:text-lg md:text-xl">
                Projects Completed
              </p>
            </div>
            <div className="border-l-2 ps-4 mt-5 lg:mt-0">
              <h3 className="text-3xl md:text-4xl">
                <div className="flex">
                  <Number n={95} /> %
                </div>
              </h3>
              <p className="text-md sm:text-lg md:text-xl">
                Client Satisfaction
              </p>
            </div>
            <div className="border-l-2 ps-4 mt-5 lg:mt-0">
              <h3 className="text-3xl md:text-4xl">
                <div className="flex">
                  <Number n={100} /> .000
                </div>
              </h3>
              <p className="text-md sm:text-lg md:text-xl">
                Data Insight Generated
              </p>
            </div>
            <div className="border-l-2 ps-4 mt-5 lg:mt-0">
              <h3 className="text-3xl md:text-4xl">
                <div className="flex">
                  <Number n={24} /> / <Number n={7} />
                </div>
              </h3>
              <p className="text-md sm:text-lg md:text-xl">
                Support and Monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
