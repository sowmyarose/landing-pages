import FeaturesSection from "../components/product-launch/features-section";
import HeroSection from "../components/product-launch/hero-section";
import PreRegisterSection from "../components/product-launch/pre-register-section";

export default function ProductLaunch() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Pre-Registration Section */}
      <PreRegisterSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Call-to-Action Section */}
      <section className="bg-[#8E2DE2] text-white text-center py-20 mt-[-24px]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Don&apos;t Miss Out on the Future of Mobile Apps
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Pre-register now and be one of the first to experience our
            revolutionary new app.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition-all">
            Pre-Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
