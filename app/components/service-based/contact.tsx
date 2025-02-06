export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#2d383a] py-12 xl:py-20">
      <div className="container xl:max-w-screen-xl mx-auto px-4 xl:px-0 text-white">
        <h2 className="text-2xl xl:text-4xl font-semibold mb-6 text-center">
          Let’s Work Together
        </h2>
        <div className="flex flex-col lg:flex-row mt-8 gap-4">
          <div className="flex flex-col lg:w-1/2 gap-4">
            <h2 className={`text-3xl xl:text-4xl font-semibold`}>
              Get in Touch
            </h2>
            <p>
              Let’s collaborate on your next design project! Reach out today to
              discuss your vision.
            </p>

            <p className="text-lg">Email: email@example.com</p>
            <p className="text-lg">Phone: 123456</p>
          </div>

          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border-b border-b-gray-300 bg-transparent"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border-b border-b-gray-300 bg-transparent"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-4 border-b border-b-gray-300 bg-transparent"
              />
            </div>
            <div className="mb-6">
              <button className="bg-transparent border border-white px-6 py-3 lg:text-lg rounded-md xl:w-1/2 font-bold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
