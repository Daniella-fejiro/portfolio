import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-widest text-neutral-500">
            ABOUT ME
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Full-Stack Developer focused on building systems that solve real-world infrastructure problems.
          </h1>

          <p className="mt-6 text-base text-neutral-600 leading-relaxed">
            I build modern web applications using React, Node.js, Express, and MongoDB,
            while exploring how software connects to large-scale systems in industries
            like telecommunications, aviation, and oil & gas.
          </p>

          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            My goal is not just to build interfaces, but to understand how systems work
            behind the scenes — how data flows, how infrastructure is maintained, and how
            real-world operations depend on software reliability.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="h-[320px] w-[280px] overflow-hidden border border-border bg-white shadow-soft sm:h-[420px] sm:w-[360px]"
            style={{
              borderRadius:
                "80% 40% 35% 55% / 40% 30% 70% 70%",
            }}
          >
            <img
              src="/girl.jpg"
              alt="Daniella"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}