export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full bg-[url('/event1.jpeg')] bg-no-repeat bg-cover bg-center h-[75vh] md:h-[90vh] flex">
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50"></div>

        {/* Content */}
        <div className="container mx-auto xl:px-6 z-50">
          <div className="flex flex-col items-center justify-center text-center w-full h-full">
            <h1 className="text-4xl xl:text-5xl font-extrabold text-white">
              Join Our Free Webinar: AI in Business
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white">
              Learn how Artificial Intelligence is transforming industries.
              Register now for our free webinar and discover AI strategies for
              your business!
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
