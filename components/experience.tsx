export function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Fulminious software",
      period: "2025 - Present",
      description: "Leading development of scalable web applications using  Node.js , building API and cloud infrastructure.",
    },
    {
      title: "Python and Data Analyst Intern",
      company: "Coplur technologies",
      period: "2025 (June - August)",
      description: "Built and maintained my own product and analyzed data using Python libraries like Pandas and Matplotlib.",
    },
    {
      title: "Junior Developer",
      company: "wealtyhvisory",
      period: "2024 - 2025 (Dec - Jan)",
      description: "Developed responsive websites and learned full-stack development practices.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-foreground pl-6 pb-8">
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
              <p className="text-lg font-medium mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
