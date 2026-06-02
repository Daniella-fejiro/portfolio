import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiFramer
} from "react-icons/si"

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },

  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },

  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
]

export default function Skills() {
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
            SKILLS
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            A practical set of tools I use to build full-stack web applications,
            user interfaces, and system-driven products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 border border-border px-4 py-3"
              >
                <Icon className="text-foreground text-lg" />
                <span className="text-sm text-muted">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}