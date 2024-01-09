import AnalyticsPictureDesktop from "../../assets/analytics.jpg"
import AnalyticsPictureMobile from "../../assets/analytics-min.jpg"
import "./solutions.scss"

const Solutions = () => {
  return (
    <section id="solutions">
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 md:block hidden"
            src={AnalyticsPictureDesktop}
            alt="a guy from analytics looking at the dashbord on his computer"
          />
          <img
            className="w-[500px] mx-auto my-4 md:hidden"
            src={AnalyticsPictureMobile}
            alt="a guy from analytics looking at the dashbord on his computer"
          />
          <div className="flex flex-col justify-center m-10">
            <p className="uppercase md:text-2xl sm:text-xl text-lg font-bold text-[#00df9a]">
              Analytics Data Control Panel
            </p>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
              Centralized Data Analytics Management
            </h2>
            <p className="sm:text-xl text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              aperiam repellendus aut reprehenderit? Dolor eveniet, dolores
              accusamus autem pariatur quasi soluta omnis earum, reprehenderit
              obcaecati nihil voluptate quibusdam officiis. Libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
