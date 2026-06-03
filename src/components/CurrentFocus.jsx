import { motion } from "framer-motion"

export default function CurrentFocus() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Current Focus
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Building Software Around Real-World Operations
          </h2>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My focus is becoming a stronger full-stack developer by building projects
              that reflect real operational challenges instead of generic apps.
            </p>

            <p>
              I’m exploring backend and system design through ideas inspired by
              large-scale, reliability-driven systems where coordination and data flow matter.
            </p>

            <p>
              Through these projects, I’m improving my skills in APIs, databases,
              authentication, real-time data, and system architecture.
            </p>

            <p>
              My goal is to build software that goes beyond CRUD apps and reflects
              real operational systems used for monitoring and decision-making.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}