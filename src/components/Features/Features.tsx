import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"
import "../UI/elements.scss"

const features = [
  {
    name: "Seamless Deployment",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fugit non id quasi perspiciatis libero?",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia nulla fugiat laborum consectetur repellendus distinctio amet numquam similique inventore.",

    icon: LockClosedIcon,
  },
  {
    name: "Effortless Queues",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla saepe ea ab magnam consequuntur eveniet repellat laudantium facilis culpa, ipsam, ipsa iusto molestiae.",
    icon: ArrowPathIcon,
  },
  {
    name: "Next-Level Security",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, molestias itaque. Numquam?",
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="py-24 sm:py-32">
        <div className="box-blur" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="md:text-xl sm:text-lg text-md text-base font-semibold leading-7 text-white">
              Simple as ...
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#00df9a] sm:text-4xl">
              Finding Nemo in the Sea of Data
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-[#00df9a]">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00df9a]">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
