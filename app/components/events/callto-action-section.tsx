export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-center py-8 lg:py-28 mt-[-35px] lg:mt-[-160px]">
      <div className="container mx-auto px-6 mt-16 lg:mt-24">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Ready to Discover the Power of AI?
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Register today and start your journey toward leveraging AI in your
          business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-6">
          <div className="text-white">
            <h3 className="text-xl font-bold">Date & Time</h3>
            <p className="mt-2">March 10, 2025 | 11:00 AM EST</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold">Speakers</h3>
            <p className="mt-2">AI Experts and Industry Leaders</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold">Duration</h3>
            <p className="mt-2">1 Hour of Actionable Insights</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition-all">
          Register Now
        </button>
      </div>
    </section>
  );
}
