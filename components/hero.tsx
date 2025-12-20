import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-4xl mb-2 text-balance">{"Hello I'm,"}</p>
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 text-balance">Sanidhya mehra.</h1>
            <h2 className="text-5xl lg:text-6xl mb-6 text-balance">
              <span className="font-bold">Full Stack</span> Developer
            </h2>
            <p className="text-4xl lg:text-5xl font-bold mb-8 text-balance">
              Based In <span className="font-bold">India.</span>
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {
                "I'm a full stack developer passionate about building user-centric applications.I focus on creating scalable, high-performance solutions. Driven by problem-solving and a love for learning, I strive to combine technical excellence with a creative vision in every project I work on."
              }
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/sanidhya-mehra-a0310a25b/"
                className="w-14 h-14 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/sanidhya-Git"
                className="w-14 h-14 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:sanidhya.web@gmail.com"
                className="w-14 h-14 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/photo.svg"
                alt="Developer working on laptop"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}