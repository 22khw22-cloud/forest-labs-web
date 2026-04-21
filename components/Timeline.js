const items = [
  { date: '2022', text: '에세이 《아무도 불러주지 않는 내 이름을 찾기로 했다》 출간 2쇄 (느린서재)' },
  { date: '2024.11', text: '네이버 콘텐츠 30 〈꽃 프로젝트〉 선정' },
  { date: '2024.12', text: '포레스트랩스 설립' },
  { date: '2025.03', text: '생각의 숲 1기 개시 — 청소년 7명, 주제: 환경·기후위기' },
  { date: '2025.11', text: '1기 완료 · 7명 전원 완주 · 《십 대가 지구를 구하는 방법》 정식 출간 (느린서재) · 전국 서점 유통', highlight: true },
  { date: '2025.12', text: '스몰빅클래스(구독자 24만) 출간 인터뷰 영상 배포' },
  { date: '2026.03', text: '생각의 숲 2기 모집 개시 — 7명 참여 중, 2026.11 출판 예정' },
  { date: '2026.04', text: '판교 IT기업 협업 기획 완성 · 협력 제안 발송 중', current: true },
]

export default function Timeline() {
  return (
    <section className="section-padding bg-forest-950 text-cream">
      <div className="container-max">

        <div className="mb-16">
          <p className="text-forest-400 text-sm font-medium tracking-widest uppercase mb-4">
            History
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
            걸어온 길
          </h2>
        </div>

        <div className="relative">
          {/* 세로선 */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-forest-800 hidden md:block"></div>

          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.date} className="flex gap-8 items-start group">
                {/* 날짜 */}
                <div className={`w-20 text-right text-sm pt-1 flex-shrink-0 font-medium ${
                  item.current ? 'text-forest-400' : 'text-forest-600'
                }`}>
                  {item.date}
                </div>

                {/* 도트 */}
                <div className="flex-shrink-0 mt-1.5 hidden md:block">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    item.highlight
                      ? 'bg-forest-400 border-forest-400'
                      : item.current
                      ? 'bg-transparent border-forest-400 animate-pulse'
                      : 'bg-forest-800 border-forest-700'
                  }`}></div>
                </div>

                {/* 텍스트 */}
                <div className={`flex-1 pb-8 border-b border-forest-800 last:border-0 text-sm leading-relaxed ${
                  item.highlight
                    ? 'text-cream font-medium'
                    : 'text-cream/60'
                }`}>
                  {item.text}
                  {item.current && (
                    <span className="ml-2 inline-flex items-center gap-1 text-xs text-forest-400 font-medium">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full animate-pulse"></span>
                      진행 중
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
