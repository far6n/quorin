import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ConversationVisual from './ConversationVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-fade" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-shimmer" />
              <span>A new kind of learning tool</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-[64px]"
            >
              Flashcards taught you to remember.{' '}
              <span className="text-accent-gradient">
                Quorin teaches you to think.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Quorin pairs cognitive science with a Socratic AI to help you
              genuinely understand what you study — not just memorize it.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#waitlist"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_18px_50px_-10px_rgba(139,92,246,0.7)]"
              >
                <span>Join the waitlist</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-accent via-accent-soft to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#problem"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative lg:pl-6"
          >
            <ConversationVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
