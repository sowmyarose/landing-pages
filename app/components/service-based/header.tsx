import Image from "next/image";
import Link from "next/link";

const menu = [
  { title: "Home", href: "/service-based" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      {/* Large */}
      <div className="hidden md:flex flex-row justify-between items-center w-full h-full text-black px-6 bg-white min-h-24">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black">
          Emily Carter
        </h1>

        {/* Menu */}
        <div className="flex flex-row items-center gap-4">
          {menu.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* CV */}
        <button className="bg-[#2d383a] text-white px-6 py-3 lg:text-lg rounded-md font-bold">
          Download CV
        </button>
      </div>

      {/* Small */}
      <div className="md:hidden flex flex-row justify-between items-center w-full h-full px-4 bg-white min-h-20">
        {/* Menu */}
        <Image src="/bars-solid.svg" alt="menu" width={25} height={25} />

        <h1 className="text-xl font-semibold text-black">Emily Carter</h1>

        {/* CV */}
        <button className="bg-[#2d383a] text-white px-4 py-1 rounded-md font-bold">
          CV
        </button>
      </div>
    </header>
  );
}
