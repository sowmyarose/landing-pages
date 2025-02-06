import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full md:min-h-[700px]">
      {/* Details */}
      <div className="flex flex-col bg-[#ffeaf0] md:w-1/2 items-center md:items-start justify-center md:px-8 lg:px-16 py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
          Emily Carter
        </h1>
        <p className="text-lg text-gray-500 mb-6 font-semibold text-center md:text-start">
          Freelance Graphic Designer specializing in branding, UI/UX, and
          digital art.
        </p>
        <p className="mt-8 text-black text-xl font-bold text-center md:text-start">
          Looking to enhance your brand with stunning visuals? <br />
          Let&apos;s collaborate!
        </p>

        <div className="flex flex-row w-full gap-4 px-2">
          <button className="mt-10 bg-[#2d383a] text-white px-6 py-3 lg:text-lg rounded-md w-1/2 font-bold">
            View Skills
          </button>
          <button className="mt-10 bg-transparent border border-[#2d383a] px-6 py-3 text-black lg:text-lg rounded-md w-1/2 font-bold">
            Contact Me
          </button>
        </div>
      </div>

      {/* Picture */}
      <div className="hidden md:flex items-center justify-center bg-[#2d383a] w-1/2 md:p-4 lg:p-0">
        <Image
          src="/profile.jpg"
          alt="Graphic Designer"
          width={500}
          height={500}
        />
      </div>
      <div className="md:hidden flex items-center justify-center bg-[#2d383a] p-8">
        <Image
          src="/profile.jpg"
          alt="Graphic Designer"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
}
