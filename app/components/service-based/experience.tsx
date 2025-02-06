import { publicsans, redrose } from "@/app/fonts/fonts";

const experience = [
  {
    year: "2022 – Present",
    title: "Senior Graphic Designer",
    company: "Creative Vision Agency",
    detail:
      "Lead the design team in crafting innovative visual concepts for digital and print media.",
  },
  {
    year: "2020 – 2022",
    title: "Graphic Designer",
    company: "Innovate Media Solutions",
    detail:
      "Designed social media graphics, website visuals, and promotional materials for high-profile brands.",
  },
  {
    year: "2018 – 2020",
    title: "Junior Graphic Designer",
    company: "Visionary Design Studio",
    detail:
      "Assisted in the development of logos, brochures, and digital ads for startup clients.",
  },
];

const education = [
  {
    degree: "Bachelor of Fine Arts (BFA) in Graphic Design",
    college: "University of XYZ",
    year: "2014 – 2018",
  },
  {
    degree: "Diploma in Graphic & Web Design",
    college: "ABC Design Institute",
    year: "2019 – 2020",
  },
];

const skills = [
  "Brand Identity",
  "UI/UX Design",
  "Illustrations",
  "Adobe Creative Suite",
  "Typography & Color Theory",
  "Print & Packaging Design",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#ffeaf0] py-12 xl:py-20">
      <div className="container xl:max-w-screen-xl mx-auto px-4 xl:px-0">
        {/* Work experience */}
        <h2
          className={`text-3xl xl:text-4xl font-semibold mb-10 ${redrose.className} text-black`}
        >
          Work Experience
        </h2>
        <div className="flex flex-col gap-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col xl:flex-row xl:items-center text-black ${publicsans.className}`}
            >
              <div className="flex flex-col gap-4 xl:gap-1 xl:w-1/2">
                <h3 className="text-lg font-semibold">{exp.year}</h3>
                <p className="text-xl font-bold">
                  {exp.title} | {exp.company}
                </p>
              </div>
              <p className="text-lg font-semibold xl:w-1/2">{exp.detail}</p>
            </div>
          ))}
        </div>

        <hr className="border border-black mt-10" />

        {/* Education */}
        <div className="flex flex-col xl:flex-row text-black mt-8">
          <h2
            className={`text-3xl xl:text-4xl font-semibold mb-10 ${redrose.className} text-black xl:w-1/2`}
          >
            Education
          </h2>

          <div className="flex flex-col gap-12">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-lg">
                  {edu.college} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border border-black mt-10" />

        {/* Skills */}
        <div className="flex flex-col xl:flex-row text-black mt-8">
          <h2
            className={`text-3xl xl:text-4xl font-semibold mb-10 ${redrose.className} text-black xl:w-1/2`}
          >
            Professional Skills
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-6 xl:w-1/2">
            {skills.map((skill, index) => (
              <h2
                key={index}
                className="p-4 bg-gray-700 rounded-xl text-white text-center"
              >
                {skill}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
