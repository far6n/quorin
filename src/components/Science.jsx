import { motion } from 'framer-motion'

const layers = [
  { label: 'Create', accent: true, width: 38 },
  { label: 'Evaluate', accent: true, width: 52 },
  { label: 'Analyze', accent: true, width: 66 },
  { label: 'Apply', accent: false, width: 80 },
  { label: 'Understand', accent: false, width: 94 },
  { label: 'Remember', accent: false, width: 108 },
]

export default function Science() {
  return (
    <section id="science" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs text-accent-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The science
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
            >
              Built on real cognitive science.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="mt-6 space-y-5 text-[17px] leading-relaxed text-white/65"
            >
              <p>
                Bloom's taxonomy describes six levels of thinking, from
                remembering facts at the bottom to creating new ideas at the
                top. Most study tools — flashcards, quizzes, spaced repetition
                — only train the bottom two.
              </p>
              <p>
                <span className="text-white/90">
                  Quorin lives at the top.
                </span>{' '}
                Through Socratic dialogue, it pushes your reasoning toward
                analysis, evaluation, and creation — where real understanding
                actually happens.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/15 via-transparent to-transparent blur-3xl" />
            <div className="relative rounded-2xl border border-white/[0.08] bg-ink-900/60 p-8 backdrop-blur sm:p-10">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                  Bloom's Taxonomy
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-soft">
                  Where Quorin lives
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.15 + (layers.length - i) * 0.08,
                    }}
                    style={{ width: `${layer.width}%` }}
                    className={`relative flex items-center justify-center rounded-md py-3 text-sm font-medium transition-all ${
                      layer.accent
                        ? 'bg-gradient-to-r from-accent-deep via-accent to-accent-soft text-white shadow-[0_8px_30px_-12px_rgba(139,92,246,0.6)]'
                        : 'border border-white/[0.08] bg-white/[0.03] text-white/55'
                    }`}
                  >
                    {layer.label}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/35">
                <span>Higher-order thinking</span>
                <span>↑</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/25">
                <span>Memorization</span>
                <span>↓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
