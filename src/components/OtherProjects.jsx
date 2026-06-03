import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const otherProjects = [
  {
    id: "04",
    title: "Blog Website Platform",
    description:
      "A clean and modern blog system designed for reading, publishing, and managing articles with a structured UI and responsive layout.",
    stack: ["React", "Tailwind CSS", "MongoDB", "Node js", "Express js"],
    demo: "https://blog-website-liard-omega.vercel.app/",
    github: "#",
  },
  {
    id: "05",
    title: "Business Analytics Dashboard",
    description:
      "An interactive analytics dashboard for visualizing business metrics, performance insights, and structured data reporting.",
    stack: ["React", "ReCharts", "CSS", "Local Storage"],
    demo: "https://react-business-analytics-dashboard.vercel.app/",
    github: "#",
  },
  {
    id: "06",
    title: "Hair Salon Booking System",
    description:
      "A booking platform that allows users to schedule appointments, manage time slots, and streamline salon operations.",
    stack: ["React", "CSS", "Local Storage"],
    demo: "https://hair-salon-booking-system.vercel.app/",
    github: "#",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function OtherProjects() {
  return (
    <section className="py-10 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Selected Work
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Other Projects
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            A collection of real-world inspired applications focused on UI systems,
            backend structure, and product thinking across different industries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative border border-border bg-background/40 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:border-black"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <span className="font-mono text-xs text-muted-foreground">
                {project.id}
              </span>

              <h3 className="mt-3 text-lg font-semibold tracking-tight transition">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border/60 px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-left gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition"
                >
                  Github <FaGithub size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}