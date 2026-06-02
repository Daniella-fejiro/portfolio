import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand / Intro */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Daniella
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full-stack developer focused on building clean, reliable systems
              with an interest in infrastructure and real-world applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest text-muted">
              NAVIGATION
            </h4>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <NavLink to="/" className="text-foreground hover:opacity-70 transition">
                Home
              </NavLink>

              <NavLink to="/projects" className="text-foreground hover:opacity-70 transition">
                Projects
              </NavLink>

              <NavLink to="/about" className="text-foreground hover:opacity-70 transition">
                About
              </NavLink>

              <NavLink to="/contact" className="text-foreground hover:opacity-70 transition">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs tracking-widest text-muted">
              CONNECT
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/"
                target="_blank"
                className="flex items-center gap-2 text-foreground hover:opacity-70 transition"
              >
                <FaGithub size={16} />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-foreground hover:opacity-70 transition"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-foreground hover:opacity-70 transition"
              >
                <FaTiktok size={16} />
                TikTok
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Daniella. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  )
}