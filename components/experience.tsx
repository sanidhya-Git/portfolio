"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead developer for multiple client projects, focusing on React and Next.js applications. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Agency",
      period: "2019 - 2021",
      description:
        "Developed and maintained web applications for enterprise clients. Worked on both frontend and backend systems using modern JavaScript frameworks.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Web Developer",
      company: "Creative Web Studio",
      period: "2017 - 2019",
      description:
        "Created responsive websites and e-commerce solutions for small to medium businesses. Collaborated with designers to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2016 - 2017",
      description:
        "Assisted in the development of web applications and learned modern development practices. Participated in code reviews and agile development processes.",
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative mb-12 md:mb-24 ${
            index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
          } w-full md:w-1/2 pl-10 md:pl-0`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-black border-2 border-violet-500 flex items-center justify-center z-10">
            <BriefcaseIcon className="h-4 w-4 text-violet-400" />
          </div>

          {/* Content */}
          <div
            className={`bg-black/80 border border-violet-900/30 p-5 rounded-lg shadow-lg ${
              index % 2 === 0 ? "md:rounded-tr-none" : "md:rounded-tl-none"
            }`}
          >
            <div className="text-violet-400 font-medium">{exp.period}</div>
            <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
            <div className="text-gray-400 mb-3">{exp.company}</div>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="text-xs bg-violet-900/30 text-violet-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

