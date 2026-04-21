export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-forest-100">
      <div className="container-max flex items-center justify-between px-6 py-4 mx-auto max-w-5xl">
        <a href="/" className="font-serif text-xl font-semibold text-forest-900 tracking-tight">
          생각의 숲
        </a>
        <div className="flex items-center gap-4">
          <a
            href="https://forest-labs.oopy.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-sm text-forest-700 hover:text-forest-900 transition-colors"
          >
            수업 안내
          </a>
          <a
            href="#newsletter"
            className="text-sm bg-forest-900 text-cream px-4 py-2 rounded-full hover:bg-forest-700 transition-colors"
          >
            뉴스레터 구독
          </a>
        </div>
      </div>
    </nav>
  )
}
