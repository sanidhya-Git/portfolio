import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Github, SunMedium as Medium } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <Input placeholder="Your name" className="h-14 text-base border-foreground/20 rounded-md" />

            <Input type="email" placeholder="Enter email" className="h-14 text-base border-foreground/20 rounded-md" />

            {/* Phone input with country code */}
            <div className="flex gap-2">
              <select className="h-14 px-4 text-base border border-foreground/20 rounded-md bg-background">
                <option>+91 IND</option>
                <option>+1 USA</option>
                <option>+44 UK</option>
              </select>
              <Input
                type="tel"
                placeholder="Enter Phone Number (Optional)"
                className="h-14 text-base border-foreground/20 rounded-md flex-1"
              />
            </div>



            <Textarea
              placeholder="How can I help?*"
              rows={6}
              className="text-base border-foreground/20 rounded-md resize-none"
            />

            {/* Submit button and social icons */}
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8"
              >
                Get In Touch
              </Button>

              <a
                href="https://www.linkedin.com/in/sanidhya-mehra-a0310a25b/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/sanidhya-Git"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

        
              
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">{"Let's talk for Something special"}</h2>

            <p className="text-lg text-muted-foreground">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive
              experiences.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:Sanidhya.web@gmail.com"
                className="block text-xl font-semibold underline hover:text-muted-foreground transition-colors"
              >
                Sanidhya.web@gmail.com
              </a>

              <a
                href="tel:+917352579915"
                className="block text-xl font-semibold underline hover:text-muted-foreground transition-colors"
              >
                +91 8955465833
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}