import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">Sanidhya mehra</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#skills" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Experience
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About Me
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Projects
            </Link> 
            <Link href="#contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contacts
            </Link>
          </nav>

<Button asChild className="bg-foreground text-background hover:bg-foreground/90">
  <a href="/files/sanidhya_mehra_resume.pdf" target="_blank" rel="noopener noreferrer">
    Resume    
  </a>
</Button>

        </div>
      </div>
    </header>
  )
}
