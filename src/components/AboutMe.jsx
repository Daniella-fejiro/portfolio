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
                    My journey into technology began with web development, where I learned
                    how to build applications that solve practical problems and deliver
                    meaningful user experiences. Working with modern JavaScript technologies
                    has given me a strong foundation in both frontend and backend development.
                </p>

                <p>
                    As I continued learning, I became curious about the systems that operate
                    behind the applications people use every day. This curiosity sparked an
                    interest in networking, infrastructure, and the technologies that power
                    large-scale operations.
                </p>

                <p>
                    While I am still early in my career, I have developed a growing interest
                    in industries such as telecommunications, aviation, and other
                    infrastructure-driven sectors. These fields present complex challenges
                    where technology plays a critical role in reliability, communication,
                    and operational efficiency.
                </p>

                <p>
                    Today, I am focused on strengthening my skills as a developer while
                    exploring areas such as Linux, networking, cloud technologies, and
                    system design. My goal is to gradually bridge the gap between software
                    development and the operational systems that support real-world
                    industries.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  )
}