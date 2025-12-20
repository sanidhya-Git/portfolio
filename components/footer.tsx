export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 px-6 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-background rounded flex items-center justify-center">
            <span className="text-foreground font-bold text-xl">S</span>
          </div>
          <span className="font-semibold text-lg">Sanidhya mehra</span>
        </div>
        
        <div className="text-sm text-background/80">
          © {new Date().getFullYear()} Sanidhya Mehra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}