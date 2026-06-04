import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next JS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Data Modeling",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Skills & Technologies
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Tools I Use To Build
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            These are the technologies I currently use to build full-stack
            applications, APIs, dashboards, and management platforms.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-border p-8 hover:border-black"
            >
              <h3 className="text-lg font-medium">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-3 py-2 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}