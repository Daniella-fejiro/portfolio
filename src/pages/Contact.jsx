import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { ArrowUpRight } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const phoneNumber = "234XXXXXXXXXX"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Hello, my name is ${form.name}.%0AEmail: ${form.email}%0AMessage: ${form.message}`

    const url = `https://wa.me/${phoneNumber}?text=${text}`

    window.open(url, "_blank")
  }

  return (
    <section className="min-h-screen py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Contact
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s build something together
          </h1>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Have a project, idea, or opportunity? Send a message and I’ll respond
            as soon as possible.
          </p>

          {/* SOCIALS */}
          <div className="mt-10 space-y-4">

            <a
              href="https://github.com"
              target="_blank"
              className="flex items-center justify-between border border-border p-4 hover:border-black transition"
            >
              <span className="flex items-center gap-3">
                <FaGithub /> GitHub
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              className="flex items-center justify-between border border-border p-4 hover:border-black transition"
            >
              <span className="flex items-center gap-3">
                <FaTiktok /> TikTok
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              className="flex items-center justify-between border border-border p-4 hover:border-black transition"
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp /> WhatsApp Chat
              </span>
              <ArrowUpRight size={16} />
            </a>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border p-6 md:p-8 space-y-5"
        >
          <div>
            <label className="text-xs text-muted-foreground">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 focus:border-black bg-transparent border border-border outline-none"
              required
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full focus:border-black mt-2 p-3 bg-transparent border border-border outline-none"
              required
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-2 focus:border-black p-3 bg-transparent border border-border outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 p-3 border border-border hover:border-black transition"
          >
            Send via WhatsApp <FaWhatsapp />
          </button>
        </motion.form>

      </div>
    </section>
  )
}