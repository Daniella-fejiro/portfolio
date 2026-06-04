import { NavLink } from "react-router-dom"
import { FaGithub, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-1">
                <span className="font-mono text-sm text-muted">
                {"<"}
              </span>

              <span className="font-heading text-lg font-semibold tracking-tight">
                Daniella
              </span>

              <span className="font-mono text-sm text-muted">
                {"/>"}
              </span>
            </h3>

            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Full-stack developer passionate about building modern web
              applications, scalable systems, and impactful digital
              experiences.
            </p>

            <a
              href="https://wa.me/2348032232968"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Navigation
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <NavLink
                to="/"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Home
              </NavLink>

               <NavLink
                to="/projects"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Projects
              </NavLink>

              <NavLink
                to="/about"
                className="text-muted-foreground transition hover:text-foreground"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Contact
            </h4>

            <div className="mt-4 space-y-4">

              <a
                href="mailto:daniellaifeakachukwu@gmail.com"
                className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <Mail size={16} />
                daniellaifeakachukwu@gmail.com
              </a>

              <a
                href="https://github.com/Daniella-fejiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <FaGithub size={16} />
                GitHub
              </a>

              <a
                href="https://www.tiktok.com/@daniella_fejiro?_r=1&_t=ZS-96vRgY74Lyf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <FaTiktok size={16} />
                TikTok
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Daniella. All rights reserved.
            </p>

            <p>
              Designed & Built with React, Tailwind CSS and Framer Motion.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}