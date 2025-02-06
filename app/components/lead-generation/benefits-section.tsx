export default function BenefitsSection() {
  return (
    <section className="relative w-full mt-6 bg-white">
      <div className="container mx-auto lg:px-8">
        <div className="flex flex-col items-center text-center py-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Why Download This eBook?
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-2 lg:px-0">
            <div className="p-6 bg-[#12b8cc] rounded-lg shadow">
              <h3 className="text-lg font-medium">
                📈 Learn SEO & Social Media
              </h3>
              <p className="text-gray-600 mt-4">
                Master the best techniques to rank higher and engage your
                audience.
              </p>
            </div>
            <div className="p-6 bg-[#f5ea92] rounded-lg shadow">
              <h3 className="text-lg font-medium">
                🎯 Boost Your Online Visibility
              </h3>
              <p className="text-gray-600 mt-4">
                Increase your reach and attract potential customers
                effortlessly.
              </p>
            </div>
            <div className="p-6 bg-[#ec9488] rounded-lg shadow">
              <h3 className="text-lg font-medium">
                💰 Convert Visitors into Customers
              </h3>
              <p className="text-gray-600 mt-4">
                Turn website traffic into real business growth with expert tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <section className="mt-12 max-w-3xl">
      <h2 className="text-2xl font-semibold text-gray-900">
        Why Download This eBook?
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium">📈 Learn SEO & Social Media</h3>
          <p className="text-gray-600">
            Master the best techniques to rank higher and engage your audience.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium">
            🎯 Boost Your Online Visibility
          </h3>
          <p className="text-gray-600">
            Increase your reach and attract potential customers effortlessly.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium">
            💰 Convert Visitors into Customers
          </h3>
          <p className="text-gray-600">
            Turn website traffic into real business growth with expert tips.
          </p>
        </div>
      </div>
    </section>
  );
}
