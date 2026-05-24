import { motion } from 'framer-motion'
import { ClipboardPaste, MessageSquareQuote, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: ClipboardPaste,
    title: 'Paste in what you’re studying',
    body: 'Notes, slides, a paper, a chapter — anything you’re trying to learn.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Quorin asks the questions that make you think',
    body: 'Instead of giving answers, it probes your reasoning the way a great tutor would.',
  },
  {
    icon: Sparkles,
    title: 'You build genuine understanding',
    body: 'Not just memory — the ability to analyze, apply, and connect ideas on your own.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-center text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
        >
          How Quorin works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-center text-white/55"
        >
          Three steps. The first one’s easy. The rest is where the real
          learning starts.
        </motion.p>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-white/30">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-balance text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {step.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
