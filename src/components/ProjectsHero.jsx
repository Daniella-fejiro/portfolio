import { motion } from "framer-motion"

export default function ProjectsHero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Projects
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">
            Building software inspired by
            real-world operational challenges.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A collection of applications, dashboards, and management platforms
            built to strengthen my full-stack development skills while exploring
            problems found in industries such as telecommunications, aviation,
            and critical infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  )
}