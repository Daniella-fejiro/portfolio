import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const interests = [
  {
    id: "01",
    title: "Infrastructure & Systems Thinking",
    description:
      "I’m interested in how software systems are structured behind the interface — how they are designed, scaled, and maintained for reliability. My focus is on understanding the foundation that keeps applications and services running consistently.",
  },
  {
    id: "02",
    title: "Operational Systems & Tools",
    description:
      "I explore tools and platforms used in real operational environments, especially those involved in monitoring, coordination, and workflow management across distributed systems.",
  },
  {
    id: "03",
    title: "Industry-Focused Technology Systems",
    description:
      "I’m particularly interested in how industries like telecommunications, aviation, and energy use technology to manage infrastructure, improve efficiency, and support real-time decision-making.",
  },
]

export default function AreasOfInterest() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            AREAS OF INTEREST
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Systems Beyond the Interface
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            My interest extends beyond building interfaces. I focus on
            understanding how systems are structured, how they operate,
            and how they support real-world use cases in different industries.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {interests.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border p-6"
            >
              <span className="font-mono text-xs text-muted">
                {item.id}
              </span>

              <h3 className="mt-4 text-lg font-medium text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-start"
        >
          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition"
          >
            Get to know me more
            <ArrowRight size={16} />
          </NavLink>
        </motion.div>

      </div>
    </section>
  )
}