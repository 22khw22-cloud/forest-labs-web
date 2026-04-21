export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream/40 py-10 px-6">
      <div className="container-max mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-6">
          <span className="font-serif text-cream/70 font-medium">생각의 숲</span>
          <span>포레스트랩스 · 대표 김민영</span>
          <span>경기도 성남시 분당구 운중로 124</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream/70 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.threads.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream/70 transition-colors"
          >
            Threads
          </a>
          <span>22khw22@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}
