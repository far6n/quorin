import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="group">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a
            href="#science"
            className="transition-colors hover:text-white"
          >
            Science
          </a>
          <a
            href="#how"
            className="transition-colors hover:text-white"
          >
            How it works
          </a>
          <a
            href="#who"
            className="transition-colors hover:text-white"
          >
            Who it's for
          </a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/90 backdrop-blur transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-white"
        >
          Join waitlist
        </a>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.header>
  )
}
