export default function FeaturesSection() {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Why You&apos;ll Love Our App
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Discover the key features that make our app a game-changer.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          <div className="text-center shadow-inner py-4">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Lightning Fast</h3>
            <p className="mt-2 text-gray-600">
              Experience speed like never before with ultra-fast performance and
              lightning-fast load times.
            </p>
          </div>
          <div className="text-center shadow-inner py-4">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Top-Notch Security
            </h3>
            <p className="mt-2 text-gray-600">
              Your data is protected with cutting-edge encryption and security
              protocols.
            </p>
          </div>
          <div className="text-center shadow-inner py-4">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Seamless Integration
            </h3>
            <p className="mt-2 text-gray-600">
              Effortlessly integrate with your favorite apps and services for a
              smooth experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
