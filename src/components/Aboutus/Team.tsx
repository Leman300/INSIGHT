/* eslint-disable jsx-a11y/no-redundant-roles */
const people = [
  {
    name: "Emma Johnson",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1496360784265-52a2509684f3?q=80&w=2070&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Williams",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Smith",
    role: "Frontend Developer",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "William Wilson",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mia Davis",
    role: "Marketing Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Anderson",
    role: "Project Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Team() {
  return (
    <div className="wrapper py-24 sm:py-32 text-white relative">
      <div className="box-blur" />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit
            culpa dignissimos velit vitae iste! Distinctio animi consectetur
            minima tempora, laudantium reiciendis veniam in corporis porro, quo
            eius rerum id!
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 lg:ms-20"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-[#00df9a]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
