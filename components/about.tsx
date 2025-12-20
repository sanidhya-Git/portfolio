import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-6">
              {
                "I'm a passionate full stack developer with over 2 years of experience building softwares . I love turning complex problems into simple, beautiful, and intuitive solutions."
              }
            </p>
            <p className="text-xl leading-relaxed mb-6">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing to open source projects,
              or sharing my knowledge through technical blog posts.
            </p>
            <p className="text-xl leading-relaxed">
              {"I'm"} always excited to take on new challenges and collaborate with teams that value innovation and
              quality craftsmanship.
            </p>
          </div>

          {/* Right side - Image/SVG */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/about.svg"
                alt="Developer working on laptop"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}