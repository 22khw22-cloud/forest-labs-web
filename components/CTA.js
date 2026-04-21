export default function CTA() {
  return (
    <section id="newsletter" className="section-padding bg-forest-800 text-cream">
      <div className="container-max text-center">

        <p className="text-forest-400 text-sm font-medium tracking-widest uppercase mb-4">
          지금 시작하세요
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-6">
          내 아이의 책이
          <br />
          교보문고에 놓입니다
        </h2>
        <p className="text-cream/60 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          뉴스레터를 구독하면 모집 소식과 AI 시대 청소년 사고력 콘텐츠를 가장 먼저 받아보실 수 있습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 bg-forest-900/60 border border-forest-700 rounded-full px-6 py-4 text-cream placeholder-cream/40 focus:outline-none focus:border-forest-400 text-sm"
          />
          <button className="bg-forest-400 text-forest-950 px-8 py-4 rounded-full font-semibold text-sm hover:bg-forest-300 transition-colors whitespace-nowrap">
            구독하기
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="https://forest-labs.oopy.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-400 hover:text-forest-300 transition-colors underline underline-offset-4"
          >
            수업 신청 바로가기 →
          </a>
          <span className="text-forest-700">|</span>
          <span className="text-cream/40 text-xs">스팸 없음 · 언제든 해지 가능</span>
        </div>

      </div>
    </section>
  )
}
