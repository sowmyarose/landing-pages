const countdown = [
  { time: "00", label: "Days" },
  { time: "00", label: "Hours" },
  { time: "00", label: "Minutes" },
  { time: "00", label: "Seconds" },
];

export default function EventDetailsSection() {
  return (
    <section className="w-full mt-[-70px] md:mt-[-170px] xl:mt-[-150px] z-50">
      <div className="w-full bg-white rounded-t-lg md:rounded-t-[25%] xl:rounded-t-[50%] xl:rounded-b-[50%] relative md:min-h-96">
        {/* Count down */}
        <div className="absolute -top-8 left-0 xl:-top-12 w-full">
          <div className="flex flex-row items-center justify-center w-full gap-2 md:gap-4 lg:gap-8">
            {countdown.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="py-6 px-5 md:px-8 xl:py-6 xl:px-6 rounded-lg bg-white flex items-center justify-center shadow-lg text-blue-600 font-extrabold text-lg sm:text-xl lg:text-2xl">
                  {item.time}
                </div>
                <h4 className="text-center text-blue-600 text-[10px] md:text-base font-extrabold mt-2">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center w-full h-full py-16 md:py-12 xl:py-24">
            <p className="mt-10 text-black">Time to start!</p>

            {/* Details */}
            <div className="text-center mt-10 xl:mt-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                Why You Should Attend
              </h2>
              <p className="mt-4 text-lg xl:text-xl text-gray-600 text-center">
                Discover how AI is revolutionizing businesses across industries.
                In this webinar, you’ll learn from industry experts about the
                latest AI trends, tools, and how to implement them in your
                organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
