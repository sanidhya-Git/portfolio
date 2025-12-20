import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
        {
      id: "01",
      title: "CSV Analyzer (VS-Code Extention)",
      description:
        "Notebook is a Kotlin Multiplatform (KMP) app built with Clean Architecture and the MVVM pattern, providing a seamless experience for both Android and iOS users. This app enables users to manage notes with a simple yet effective interface.",
      features: ["Secure and Fast Performance", "Seamless Notes Management", "Personalised Experience"],
      liveLink: "https://csv-qya2.onrender.com/",
      // sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/csv-analyzer-desktop.jpg"],
    },
    {
      id: "02",
      title: "AI-Resume Anayzer using Gemini (Gemma 3)",
      description:
        "Notebook is a Kotlin Multiplatform (KMP) app built with Clean Architecture and the MVVM pattern, providing a seamless experience for both Android and iOS users. This app enables users to manage notes with a simple yet effective interface.",
      features: ["Secure and Fast Performance", "Seamless Notes Management", "Personalised Experience"],
      liveLink: "https://resumeanalyzer-bxgrwmhuwashldzjyugvoj.streamlit.app/",
      sourceLink: "https://github.com/sanidhya-Git/resume_analyzer",
      mockupType: "desktop",
      mockups: ["/AI-resume-analyzer-phone-1.jpg", "/AI-resume-analyzer-phone-2.jpg"],
    },
    {
      id: "03",
      title: "SNT-Club",
      description:
        "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
      liveLink: "https://snt-club.vercel.app/",
      sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/sntclub.png"],
    },
        {
      id: "04",
      title: "WealthVisory",
      description:
        "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
      liveLink: "https://www.wealthvisory.in/",
      sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/wealthvisory.png"],
    },
            {
      id: "05",
      title: "RentalHub",
      description:
        "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
      liveLink: "https://rentalog.vercel.app/#home",
      sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/rentalog.png"],
    },
                {
      id: "06",
      title: "E-wallet",
      description:
        "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
      liveLink: "https://pass-sooty.vercel.app/",
      sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/Sercure.png"],
    },
                    {
      id: "07",
      title: "BDC-SKIT",
      description:
        "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
      liveLink: "https://bdc-snowy.vercel.app/",
      sourceLink: "#",
      mockupType: "desktop",
      mockups: ["/BDC.png"],
    },
    
  ]

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold mb-16 text-center text-white">My Projects</h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                {project.mockupType === "phone" ? (
                  <div className="bg-zinc-900 rounded-3xl p-8 lg:p-12">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    </div>

                    <div className="flex justify-center gap-4">
                      {project.features &&
                        project.features.map((feature, idx) => (
                          <div key={idx} className="flex-1">
                            <div className="bg-black rounded-2xl p-4 aspect-[9/16] relative overflow-hidden">
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-800 rounded-full" />
                              <div className="mt-12 space-y-3">
                                <div className="h-3 bg-zinc-800 rounded w-3/4" />
                                <div className="h-3 bg-zinc-800 rounded w-full" />
                                <div className="h-3 bg-zinc-800 rounded w-2/3" />
                              </div>
                              <p className="absolute bottom-4 left-4 right-4 text-xs text-white font-medium text-center">
                                {feature}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-zinc-900 rounded-3xl p-2 overflow-hidden">
                    <Image
                      src={project.mockups[0] || "/placeholder.svg"}
                      alt={project.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 w-full space-y-6">
                <div>
                  <div className="text-7xl lg:text-8xl font-bold text-white mb-4">{project.id}</div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">{project.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl px-6 py-6 text-base font-medium"
                  >
                    <Link href={project.liveLink}>
                      View Live <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  {project.sourceLink && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-black rounded-xl px-6 py-6 text-base font-medium bg-transparent"
                    >
                      <Link href={project.sourceLink}>View Source Code</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
