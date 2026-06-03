import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            My Journey
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            From web development to infrastructure-focused systems.
          </h2>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
                My journey into tech began with web development, where I learned to build
                applications that solve real problems and create meaningful user experiences.
            </p>

            <p>
                As I grew, I became curious about the systems behind everyday applications,
                developing an interest in networking, infrastructure, and large-scale systems.
            </p>

            <p>
                I’m particularly interested in industries like telecommunications, aviation,
                and other infrastructure-driven sectors where technology ensures reliability
                and efficiency.
            </p>

            <p>
                Currently, I’m focused on improving my skills in development while exploring
                Linux, networking, cloud technologies, and system design to bridge software
                and real-world infrastructure.
            </p>
        </div>
        </motion.div>
      </div>
    </section>
  )
}