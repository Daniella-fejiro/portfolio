import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    id: "01",
    title: "NetWatch",
    industry: "Network Monitoring & IT Operations",
    image: "/netwatch.png",
    overview:
      "A full-stack network monitoring system that tracks server uptime and downtime, automatically generates incidents, calculates reliability metrics, and delivers real-time notifications to help administrators monitor infrastructure health.",
    problem:
      "IT teams need timely visibility into server availability to quickly detect outages, minimize downtime, and maintain reliable services. Manual monitoring can delay issue detection and increase operational risk.",
    solution:
      "Developed a real-time monitoring platform that continuously tracks server status, records incidents, calculates uptime percentages, and instantly notifies connected users through WebSockets whenever a server's status changes.",
    stack: [ "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT", "Tailwind CSS",],
    github: "https://github.com/Daniella-fejiro/netwatch",
  },
  {
    id: "02",
    title: "FexHomes Real Estate Platform",
    industry: "Real Estate Operations",
    image: "/fexhomes.png",
    overview:
      "A modern real estate platform designed to help users discover properties, explore listings, and learn about property verification services.",
    problem:
      "Property buyers often struggle to find trustworthy information, verify listings, and understand the due diligence process involved in property acquisition.",
    solution:
      "Built a responsive platform that presents listings, property services, and verification processes in a structured and accessible way while maintaining a strong focus on trust and usability.",
    stack: ["Next.js", "Tailwind CSS", "Sanity", "Cloudinary"],
    demo: "https://fexhomes.org",
    github: "https://github.com/Daniella-fejiro/fex-homes",
  },
  {
    id: "03",
    title: "Wallet Management System",
    industry: "Financial Management",
    image: "/wallet.png",
    overview:
      "A financial management application that helps users monitor balances, track transactions, and maintain visibility into their finances.",
    problem:
      "Managing personal finances can become difficult when transaction records and account balances are spread across multiple sources.",
    solution:
      "Developed a centralized dashboard that allows users to manage transactions and view financial information through a simple and intuitive interface.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://wallet-app-delta-eight.vercel.app/",
    github: "https://github.com/Daniella-fejiro/wallet-app",
  },
  {
    id: "04",
    title: "Young Revivalist Global Network",
    industry: "Community Management",
    image: "/yrgn.png",
    overview:
      "A digital platform created to provide an online presence for an organization and improve communication with its audience.",
    problem:
      "Organizations often need a structured platform to communicate their mission, share information, and engage their communities effectively.",
    solution:
      "Designed and developed a modern website that organizes information clearly and improves accessibility for visitors and members.",
    stack: ["React", "Tailwind CSS", "Vite"],
    demo: "https://young-revivalist-global-network.vercel.app/",
    github: "https://github.com/Daniella-fejiro/young-revivalist-global-network",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Featured Work
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Projects
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            A collection of projects that demonstrate my approach to solving
            practical problems through full-stack development, system design,
            and user-focused experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="border-t border-border pt-12"
              >

                {/* GRID (Mobile stacked, Desktop alternating) */}
                <div
                  className={`grid items-center gap-10 lg:gap-14 ${
                    isReversed
                      ? "lg:grid-cols-[1fr_480px]"
                      : "lg:grid-cols-[480px_1fr]"
                  }`}
                >

                  {/* IMAGE */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`group block ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="overflow-hidden border border-border bg-card shadow-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          aspect-video
                          w-full
                          object-cover
                          transition-all
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>
                  </a>

                  {/* CONTENT */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.id}
                    </span>

                    <div className="mt-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {project.industry}
                      </span>

                      <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      {project.overview}
                    </p>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Problem</h4>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium">Solution</h4>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* STACK */}
                    <div className="mt-8">
                      <h4 className="text-sm font-medium">
                        Technology Stack
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* LINKS */}
                    <div className="mt-8 flex gap-6">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition"
                          >
                            Live Demo
                            <ArrowUpRight size={16} />
                          </a>
                        )}     

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition"
                      >
                        GitHub
                        <FaGithub size={16} />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}