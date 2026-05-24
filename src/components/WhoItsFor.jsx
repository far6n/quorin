import { motion } from 'framer-motion'

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl"
        >
          For the people who already try hard.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-8 space-y-5 text-[17px] leading-relaxed text-white/65"
        >
          <p>
            Struggling to learn deeply isn’t a discipline problem. It’s a tools
            problem. You can re-read, highlight, and grind through flashcards
            for hours and still feel like the material slips through your
            fingers.
          </p>
          <p className="text-white/85">
            Quorin is built for serious learners, students with ADHD, and
            anyone who wants to think better — not just study harder.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {[
            'Serious learners',
            'Students with ADHD',
            'Grad students',
            'Self-taught builders',
            'Lifelong thinkers',
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/70 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
