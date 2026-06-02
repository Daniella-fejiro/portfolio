import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    id: "01",
    role: "Frontend Intern",
    company: "Imperial ICT Hub",
    period: "Mar 2026 – Apr 2026",
    icon: Briefcase,
    description:
      "Worked on frontend development tasks, contributing to UI implementation and assisting in building responsive web interfaces. Gained hands-on experience with React and modern frontend workflows in a team environment.",
  },
  {
    id: "02",
    role: "Frontend Instructor / Developer",
    company: "Imperial ICT Hub",
    period: "2026 – Present",
    icon: GraduationCap,
    description:
      "Currently involved in teaching frontend development fundamentals while contributing to internal web projects. Responsibilities include guiding learners, building UI components, and maintaining practical coding standards.",
  },
]

export default function Experience() {
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
            EXPERIENCE
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Professional Experience
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            Practical experience gained through internships, teaching, and
            frontend development roles in real working environments.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="mt-14 space-y-10">

          {experiences.map((exp, index) => {
            const Icon = exp.icon

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="border border-border p-6"
              >

                {/* ICON + TITLE ROW */}
                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center border border-border">
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>

                  <h3 className="text-lg font-medium text-foreground">
                    {exp.role}
                  </h3>
                </div>

                {/* COMPANY + PERIOD */}
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-sm text-muted">
                    {exp.company}
                  </p>

                  <span className="text-xs text-muted">
                    {exp.period}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-relaxed text-muted max-w-2xl">
                  {exp.description}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}