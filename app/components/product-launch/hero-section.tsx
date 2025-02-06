export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] text-white text-center py-20 xl:min-h-[650px] flex items-center">
      {/* Hero Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full h-full">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Experience the Future of Mobile Innovation
          </h1>
          <p className="mt-4 md:text-lg lg:text-xl">
            Experience our groundbreaking new mobile app that will change the
            way you interact with technology. <br /> Join our pre-launch program
            and be the first to experience it.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition-all">
            Get Early Access
          </button>
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 800 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L40,80C80,64,160,32,240,37.3C320,43,400,85,480,90.7C560,96,640,64,720,64C800,64,880,96,960,122.7C1040,149,1120,171,1200,160L1200,120L0,120Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
