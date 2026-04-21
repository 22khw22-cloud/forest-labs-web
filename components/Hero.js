export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-forest-950 text-cream pt-16">
      <div className="container-max section-padding w-full">
        <div className="max-w-3xl">

          {/* 태그라인 */}
          <div className="inline-flex items-center gap-2 text-forest-400 text-sm font-medium mb-8 tracking-widest uppercase">
            <span className="w-8 h-px bg-forest-400"></span>
            Forest Labs · 생각의 숲
          </div>

          {/* 메인 헤드라인 */}
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight mb-8">
            청소년이{' '}
            <br />
            <span className="text-forest-400">정말 책을</span>
            <br />
            내는 프로그램
          </h1>

          {/* 서브카피 */}
          <p className="text-lg md:text-xl text-cream/70 leading-relaxed max-w-xl mb-12">
            사고력 글쓰기 수업 + 정식 출판 계약 + 판교 IT 현직자 멘토링.
            <br className="hidden md:block" />
            내 아이의 이름이 실린 책이 교보문고에 놓입니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://forest-labs.oopy.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-forest-400 text-forest-950 px-8 py-4 rounded-full font-semibold text-base hover:bg-forest-300 transition-colors"
            >
              수업 신청하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-4 rounded-full font-medium text-base hover:bg-cream/10 transition-colors"
            >
              더 알아보기
            </a>
          </div>

        </div>

        {/* 스크롤 힌트 */}
        <div className="mt-24 flex items-center gap-3 text-cream/40 text-sm">
          <div className="w-px h-12 bg-cream/20"></div>
          <span>스크롤하여 더 보기</span>
        </div>
      </div>
    </section>
  )
}
