export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Background Image */}
          <div className="w-full min-h-[500px] xl:min-h-[650px] bg-[url('/lead-gen/ebook.jpg')] bg-no-repeat bg-cover bg-center rounded-b-[50px] shadow-md"></div>

          {/* Content */}
          <h1 className="w-full mt-[-100px] md:mt-[-70px] xl:mt-[-100px] text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900">
            Unlock the Secrets of Digital Marketing
          </h1>
          <p className="text-white mt-16 md:text-lg">
            Get a free eBook packed with expert strategies to grow your business
            online.
          </p>

          <form className="mt-3 p-6 rounded-lg shadow-md flex flex-col items-center w-full lg:w-3/4 xl:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-3 border rounded-md"
            />
            <button className="w-full xl:w-1/2 bg-[#bcd9ea] text-[#193043] font-semibold p-2 rounded-md">
              Download Free eBook
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
