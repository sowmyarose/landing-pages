import Image from "next/image";

function HostSection() {
  return (
    <section className="bg-[#E4E6E9] py-32 mt-[-230px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse items-center xl:items-start lg:flex-row gap-5 mt-32">
          <div className="flex flex-col items-center lg:items-start gap-4 xl:w-1/2 justify-center">
            <h2 className="text-2xl font-extrabold text-blue-600">
              Dr. Emily Carter
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium mt-1">
              AI Researcher & Business Strategist
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed text-center lg:text-start">
              Join Dr. Emily Carter, a renowned AI expert, as she shares
              insights on how artificial intelligence is transforming businesses
              and driving innovation in various industries.
            </p>
          </div>

          <div>
            <Image src="/host.jpg" alt="host" width={600} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="bg-white text-black text-center py-10 xl:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Join Hundreds of Attendees
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Our previous webinars have helped thousands of professionals learn
          valuable skills. Don’t miss your chance to join us and take your
          business to the next level with AI.
        </p>
      </div>
    </section>
  );
}

export { HostSection, ProofSection };
