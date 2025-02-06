export default function PreRegisterSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-4xl font-extrabold text-gray-800">
            Be the First to Experience Our App
          </h2>
          <p className="mt-4 md:text-xl text-gray-600">
            Enter your email below to get exclusive access to early features and
            updates.
          </p>

          <div className="mt-6 w-full md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-4 w-full md:w-auto px-6 py-3 bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Pre-Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
