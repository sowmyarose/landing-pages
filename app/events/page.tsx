import CallToActionSection from "../components/events/callto-action-section";
import EventDetailsSection from "../components/events/details-section";
import HeroSection from "../components/events/hero-section";
import {
  HostSection,
  ProofSection,
} from "../components/events/host-proof-sections";
import RegisterSection from "../components/events/register-section";

export default function Events() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Hero section */}
      <HeroSection />

      {/* Event Details Section */}
      <EventDetailsSection />

      {/* Host section */}
      <HostSection />

      {/* Social Proof Section */}
      <ProofSection />

      {/* Registration Form Section */}
      <RegisterSection />

      {/* Final Call to Action */}
      <CallToActionSection />
    </div>
  );
}
