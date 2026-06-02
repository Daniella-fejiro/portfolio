import { motion } from "framer-motion"
import { FaGithub, FaTiktok, FaLinkedin } from "react-icons/fa"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-6 pt-24 pb-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl "
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm text-muted">
              Currently building new projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Full Stack
            <br />
            Developer
          </h1>

          {/* Intro */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Building modern web applications and exploring
            software solutions for telecommunications,
            aviation, and industrial operations.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-background"
            >
              Let's Talk
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
              }}
              className="rounded-full border border-border px-6 py-3 text-center text-foreground"
            >
              View Projects
            </motion.a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              <FaGithub size={18} />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              <FaTiktok size={18} />
              TikTok
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          {/* Image Container */}
          <div
            className="h-[320px] w-[280px] overflow-hidden border border-border bg-white shadow-soft sm:h-[420px] sm:w-[360px]"
            style={{
              borderRadius:
                "60% 40% 35% 65% / 40% 30% 70% 60%",
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