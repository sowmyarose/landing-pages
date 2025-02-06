import AboutSection from "../components/service-based/about";
import ContactSection from "../components/service-based/contact";
import ExperienceSection from "../components/service-based/experience";
import Header from "../components/service-based/header";
import HeroSection from "../components/service-based/hero-section";

export default function ServiceBased() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About section */}
      <AboutSection />

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-10 text-black">
          My Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-[#2d383a] rounded-md p-6 text-center font-bold"
            >
              Project {index}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
