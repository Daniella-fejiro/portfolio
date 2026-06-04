import { motion } from "framer-motion"

export default function ProjectsHero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl ">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-4"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Projects
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">
             Building software inspired by 
             real-world operational challenges.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A collection of apps and dashboards built to improve my full-stack skills
            while exploring real-world problems and system design challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}