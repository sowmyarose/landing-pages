import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full relative flex flex-col md:flex-row items-center justify-center bg-[#F1E0CE] py-10 md:px-4 lg:py-20 lg:px-16"
    >
      <div className="flex md:items-center md:justify-center md:w-1/2">
        <Image
          src="/profile2.jpg"
          alt="Graphic Designer"
          width={600}
          height={700}
        />
      </div>

      <div className="w-full flex flex-col py-4 items-center md:items-start justify-center px-4 lg:px-16 md:w-1/2 gap-10 text-black">
        <h3 className="text-lg lg:text-2xl font-bold">
          Passionate about visual storytelling and impactful branding. Available
          for freelance and full-time opportunities.
        </h3>
        <p>
          Highly skilled Graphic Designer with 10 years of experience in
          branding, digital marketing, and user-centric design. Adept at
          transforming ideas into engaging visuals that drive engagement and
          business success. Passionate about storytelling through design and
          delivering high-quality creative solutions.
        </p>

        <button className="mt-5 lg:mt-10 bg-[#2d383a] text-white px-6 py-3 text-lg rounded-md w-1/2 font-bold">
          View Skills
        </button>
      </div>
    </section>
  );
}
