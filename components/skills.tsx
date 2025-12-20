"use client"

import { useEffect, useRef } from "react"

export function Skills() {
  const techStack = [
    { name: "Android", icon: "🤖" },
    { name: "Kotlin", icon: "K" },
    { name: "Jetpack Compose", icon: "🎨" },
    { name: "KMP", icon: "🔷" },
    { name: "Java", icon: "☕" },
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "▲" },
    { name: "Ktor", icon: "◆" },
    { name: "PostgreSQL", icon: "🐘" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Tech Stack</h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 overflow-hidden" style={{ scrollBehavior: "auto" }}>
            {/* First set of cards */}
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="min-w-[160px] h-[180px] flex flex-col items-center justify-center gap-4 bg-background border-2 border-border rounded-xl p-6 hover:border-foreground transition-colors"
              >
                <div className="text-5xl">{tech.icon}</div>
                <p className="font-semibold text-center text-sm">{tech.name}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="min-w-[160px] h-[180px] flex flex-col items-center justify-center gap-4 bg-background border-2 border-border rounded-xl p-6 hover:border-foreground transition-colors"
              >
                <div className="text-5xl">{tech.icon}</div>
                <p className="font-semibold text-center text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
