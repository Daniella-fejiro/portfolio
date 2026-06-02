import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "FexHomes Real Estate Platform",
    description:
      "A real estate web platform for browsing property listings, viewing details, and exploring available homes with a clean, responsive interface focused on user simplicity.",
    stack: ["Next.js", "Tailwind CSS", "Sanity", "Cloudinary"],
    demo: "https://fexhomes.org",
    github: "#",
  },
  {
    id: "02",
    title: "Young Revivalist Global Network",
    description:
      "A digital platform for an organization, built to present content, structure community information, and provide a modern web presence for engagement and outreach.",
    stack: ["React", "Tailwind", "Vite"],
    demo: "https://young-revivalist-global-network.vercel.app/",
    github: "#",
  },
  {
    id: "03",
    title: "Wallet Management System",
    description:
      "A financial dashboard for tracking balances and transactions, designed with a focus on clarity, simplicity, and efficient state handling for user financial data.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://wallet-app-delta-eight.vercel.app/",
    github: "#",
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            FEATURED WORK
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Selected Projects
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            A small collection of production-ready applications focused on
            real-world use cases, system design, and clean user experience.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 divide-y divide-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="py-10"
            >
              <div className="grid gap-6 lg:grid-cols-[100px_1fr] lg:gap-10">

                {/* ID */}
                <div className="text-sm font-mono text-muted">
                  {project.id}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-6 text-sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-foreground hover:opacity-70 transition"
                    >
                      Live Site <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1 text-foreground hover:opacity-70 transition"
                    >
                      Code <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12">
          <a
            href="/projects"
            className="text-sm text-foreground hover:opacity-70 transition inline-flex items-center gap-2"
          >
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}