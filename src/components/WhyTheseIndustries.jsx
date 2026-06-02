import { motion } from "framer-motion"

const industries = [
  {
    id: "01",
    title: "Telecommunications",
    description:
      "I’m interested in how telecom systems support large-scale communication networks, especially in areas like monitoring, reliability, and maintaining performance in real time.",
  },
  {
    id: "02",
    title: "Aviation",
    description:
      "Aviation systems depend on coordination, timing, and operational precision. I’m interested in the software and infrastructure that support logistics, safety, and day-to-day operations behind flight systems.",
  },
  {
    id: "03",
    title: "Oil & Gas",
    description:
      "This industry is driven by infrastructure-heavy operations where monitoring, maintenance, and efficiency are critical. I’m interested in how software and data systems support these processes.",
  },
]

export default function WhyIndustries() {
  return (
    <section className="bg-background py-10">
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
            WHY THESE INDUSTRIES
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Interest in Real-World Infrastructure Systems
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            My interest in these industries comes from how they depend on
            large-scale infrastructure, coordination, and systems that must
            operate reliably in real time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {industries.map((item, index) => (
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

      </div>
    </section>
  )
}