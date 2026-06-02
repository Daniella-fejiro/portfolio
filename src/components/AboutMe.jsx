import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            ABOUT
          </span>

          <h1 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Who I Am
          </h1>
        </motion.div>

        {/* Content */}
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted max-w-3xl">

          <p>
            I am a full-stack web developer focused on building practical and
            functional web applications using modern JavaScript technologies.
            My work is centered around creating clean, structured, and scalable
            systems.
          </p>

          <p>
            Over time, I’ve developed a strong interest in how technology is used
            in real-world infrastructure-heavy industries. This has led me to
            focus my learning and projects around sectors such as telecommunications,
            aviation, and oil & gas.
          </p>

          <p>
            I’m particularly interested in how these industries rely on systems
            for communication, coordination, and operational efficiency, and how
            software can improve those processes.
          </p>

          <p>
            Outside of web development, I am currently exploring the broader
            infrastructure space — including Linux, networking, and cloud systems —
            as part of my long-term growth direction toward system-level engineering.
          </p>

          <p>
            I am still early in this path, but I am intentional about the direction
            I’m moving in: building practical experience, improving my technical
            depth, and working on systems that solve real problems.
          </p>

        </div>

      </div>
    </section>
  )
}