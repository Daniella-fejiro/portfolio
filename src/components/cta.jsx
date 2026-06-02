import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function CTA() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border p-10 text-center md:p-14"
        >

          {/* Label */}
          <span className="font-mono text-xs tracking-widest text-muted">
            CONTACT
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            Let’s build something useful
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
            I’m open to collaboration, freelance work, and practical software
            projects. If you have an idea or system you’re working on, I’m
            available to contribute.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/contact"
                className="flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm text-background"
              >
                Get in touch
                <ArrowRight size={16} />
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <NavLink
                to="/projects"
                className="border border-border px-5 py-2.5 text-sm text-foreground"
              >
                View projects
              </NavLink>
            </motion.div>

          </div>

          {/* Footer note */}
          <p className="mt-8 text-xs text-muted">
            Usually responds within a short time
          </p>

        </motion.div>
      </div>
    </section>
  )
}