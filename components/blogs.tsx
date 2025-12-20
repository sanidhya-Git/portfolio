import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function Blogs() {
  const blogs = [
    {
      title: "Building Scalable React Applications",
      description: "Best practices for structuring large-scale React projects.",
      date: "Dec 15, 2024",
      link: "#",
    },
    {
      title: "Modern Authentication with Next.js",
      description: "Implementing secure authentication flows in Next.js applications.",
      date: "Nov 28, 2024",
      link: "#",
    },
    {
      title: "Optimizing Database Queries",
      description: "Tips and tricks for improving database performance.",
      date: "Nov 10, 2024",
      link: "#",
    },
  ]

  return (
    <section id="blogs" className="py-20 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link key={index} href={blog.link}>
              <Card className="h-full hover:border-foreground transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{blog.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{blog.date}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{blog.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
