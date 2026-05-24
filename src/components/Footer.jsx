import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/45 md:flex-row">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <p className="text-center text-white/45">
          Built with cognitive science. Powered by curiosity.
        </p>
        <p className="text-white/35">© {year} Quorin</p>
      </div>
    </footer>
  )
}
