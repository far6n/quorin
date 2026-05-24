import { motion } from 'framer-motion'

const statements = [
  'You studied for hours. You forgot it in days.',
  'Active recall still feels like memorization.',
  "You know the material, but you can't actually use it.",
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-center text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
        >
          You've felt this before.
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:mt-20 sm:gap-5 md:grid-cols-3">
          {statements.map((line, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="mb-4 text-accent/70">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.17 17c-2.31 0-4.17-1.86-4.17-4.17 0-3.31 2.69-6.83 6-7.83l.79 1.66c-1.79.55-3.33 1.95-3.33 3.34h.71c1.84 0 3.33 1.49 3.33 3.33S9.01 17 7.17 17zm9.66 0c-2.31 0-4.17-1.86-4.17-4.17 0-3.31 2.69-6.83 6-7.83l.79 1.66c-1.79.55-3.33 1.95-3.33 3.34h.71c1.84 0 3.33 1.49 3.33 3.33S18.67 17 16.83 17z" />
                </svg>
              </div>
              <p className="text-balance text-lg leading-relaxed text-white/85">
                {line}
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
