export default function RegisterSection() {
  return (
    <section className="bg-[#E4E6E9] py-10 xl:py-20 rounded-b-[5%] lg:rounded-b-[30%] z-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Register Now and Secure Your Spot
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Don&apos;t miss out on this opportunity to learn how AI can
            transform your business. Fill out the form below to secure your spot
            in the webinar.
          </p>
        </div>

        <div className="mt-8 w-full md:w-1/2 mx-auto">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 text-center">
              <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
