import BenefitsSection from "../components/lead-generation/benefits-section";
import HeroSection from "../components/lead-generation/hero-section";

export default function LeadGeneration() {
  return (
    <div className="w-full h-full flex flex-col gap-6 bg-[#193043]">
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits section */}
      <BenefitsSection />

      {/* Final CTA Section */}
      <section className="mt-16 text-center">
        <p className="md:text-lg text-white">
          Download now and start growing your brand online!
        </p>
        <button className="mt-4 bg-[#bcd9ea] text-[#193043]  px-6 py-2 font-semibold p-2 rounded-md  mb-4">
          Get Your Free Copy
        </button>
      </section>
    </div>
  );
}
