import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-10 text-center backdrop-blur sm:p-14"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-radial-fade" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

          <div className="relative">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
              Think deeper.{' '}
              <span className="text-accent-gradient">Starting soon.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-white/55">
              Join the waitlist and we’ll send you an invite the moment Quorin
              is ready.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@thinking.com"
                    className="flex-1 rounded-full border border-white/10 bg-ink-900/80 px-5 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all focus:border-accent/50 focus:bg-ink-900 focus:ring-2 focus:ring-accent/20"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_18px_50px_-10px_rgba(139,92,246,0.7)]"
                  >
                    Join waitlist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm text-white"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/30">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  You’re on the list. We’ll be in touch.
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-5 text-xs text-white/35">
              No spam. One email when we launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
