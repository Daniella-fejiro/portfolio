import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              About Me
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Building software for industries that keep the world moving.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm Daniella, a Full-Stack Developer focused on creating
              modern digital solutions while exploring technology's role in
              telecommunications, aviation, and critical infrastructure.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">
                Available for internships and collaborations
              </span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="overflow-hidden border border-border bg-card shadow-soft
              h-[320px] w-[280px] sm:h-[420px] sm:w-[360px]"
              style={{
                borderRadius:
                  "75% 35% 45% 55% / 35% 35% 65% 65%",
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
      </div>
    </section>
  )
}