import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Lightbulb, Users } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building web applications and
                digital experiences.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in software development began during my computer science studies, where I discovered my
                passion for creating intuitive and efficient digital solutions. Since then, I've worked with startups
                and established companies to deliver high-quality applications that solve real-world problems.
              </p>
              <p>
                I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, Node.js, and various
                database technologies. I'm constantly learning and exploring new technologies to stay at the forefront
                of web development.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                projects. I believe in writing clean, maintainable code and creating accessible user experiences.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Laptop className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-bold">Web Dev</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Code className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-bold">Clean Code</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-bold">Teamwork</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Lightbulb className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

