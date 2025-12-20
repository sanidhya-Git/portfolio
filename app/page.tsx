import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
// import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* <Skills /> */}
        <Experience />
        <About />
        <Projects />      
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
