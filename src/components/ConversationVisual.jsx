import { motion } from 'framer-motion'

const messages = [
  {
    from: 'you',
    text: 'Mitochondria produce ATP through oxidative phosphorylation.',
  },
  {
    from: 'quorin',
    text: 'Good. Now — why would a muscle cell have more mitochondria than a skin cell?',
  },
  {
    from: 'you',
    text: 'Because it needs more energy?',
  },
  {
    from: 'quorin',
    text: 'Closer. What does "more energy" actually mean here — and how would you measure it?',
  },
]

export default function ConversationVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 p-5 shadow-2xl backdrop-blur sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/30">
            Session · Biology
          </span>
        </div>

        <div className="space-y-4">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5 + i * 0.25,
              }}
              className={`flex ${
                m.from === 'you' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                  m.from === 'you'
                    ? 'bg-white/[0.06] text-white/85 ring-1 ring-inset ring-white/5'
                    : 'bg-accent/15 text-white ring-1 ring-inset ring-accent/30'
                }`}
              >
                {m.from === 'quorin' && (
                  <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-accent-soft">
                    Quorin
                  </div>
                )}
                {m.text}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.4 }}
            className="flex items-center gap-1.5 pl-3 pt-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-shimmer" />
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-shimmer"
              style={{ animationDelay: '0.3s' }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-shimmer"
              style={{ animationDelay: '0.6s' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
