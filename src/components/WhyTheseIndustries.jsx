import { motion } from "framer-motion"

const industries = [
  {
    id: "01",
    title: "Telecommunications",
    description:
      "Telecommunications is the industry that most closely aligns with my growing interest in infrastructure and large-scale systems. Every call, message, and internet connection depends on networks that must remain available, reliable, and efficient. I'm particularly interested in the technologies used to monitor network performance, manage incidents, and maintain critical communication services that millions of people depend on daily.",
  },
  {
    id: "02",
    title: "Aviation",
    description:
      "What draws me to aviation is the level of coordination required behind every operation. Beyond the aircraft themselves are systems responsible for scheduling, logistics, maintenance, communication, and operational visibility. I'm interested in how software can improve efficiency, support decision-making, and provide reliable information in environments where precision matters.",
  },
  {
    id: "03",
    title: "Oil & Gas",
    description:
      "Oil and gas operations often span large geographical areas and rely heavily on infrastructure, monitoring, and asset management. The scale and complexity of these environments make them particularly interesting from a technology perspective. I'm interested in how software systems can support operational awareness, maintenance processes, and data-driven decision-making across critical infrastructure.",
  },
]

export default function WhyIndustries() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Areas of Interest
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Why These Industries?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            As I grow as a developer, I’m drawn to infrastructure-heavy industries
            that rely on large-scale, reliable systems powering real-world services
            like communication and transportation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                group
                border
                border-border
                bg-card/50
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
              "
            >
              <span className="font-mono text-xs text-muted-foreground">
                {item.id}
              </span>

              <h3 className="mt-4 text-xl font-medium text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}