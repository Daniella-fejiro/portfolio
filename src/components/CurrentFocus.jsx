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
              My current focus is becoming a stronger full-stack developer by
              building projects that reflect real operational challenges rather
              than generic portfolio applications. I enjoy creating systems
              that manage information, improve visibility, and support
              decision-making processes.
            </p>

            <p>
              As I continue developing my backend and system design skills, I'm
              intentionally exploring project ideas inspired by industries such
              as telecommunications, aviation, and energy. These industries
              depend on reliability, coordination, monitoring, and efficient
              information flow—areas where software can provide significant
              value.
            </p>

            <p>
              Through these projects, I'm gaining experience designing APIs,
              working with databases, implementing authentication and role
              management, handling real-time data, and building platforms that
              simulate how technology supports day-to-day operations in complex
              environments.
            </p>

            <p>
              My goal is to build software that goes beyond traditional CRUD
              applications and reflects the types of systems organizations use
              to monitor assets, manage operations, track incidents, and make
              informed decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}