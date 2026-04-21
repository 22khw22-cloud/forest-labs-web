const tags = [
  'SBS·EBS 방송구성작가',
  '7년 초등 현장 교육',
  '에세이 출간 2쇄',
  'Claude Code 개발',
  '판교 거주',
]

export default function About() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* 텍스트 */}
          <div>
            <p className="text-forest-500 text-sm font-medium tracking-widest uppercase mb-4">
              Creator
            </p>
            <h2 className="font-serif text-4xl font-semibold text-forest-950 leading-tight mb-6">
              김민영
              <span className="block text-2xl text-forest-600 mt-2 font-normal">포레스트랩스 대표</span>
            </h2>

            <div className="space-y-4 text-forest-700 text-base leading-relaxed mb-8">
              <p>
                SBS·EBS 방송구성작가로 시작해 7년간 매주 초등학교 교실을 찾아다니며
                아이들과 함께 생각을 키웠습니다.
              </p>
              <p>
                "아이들은 IT 직업을 알고 싶어하는데, 현장의 이야기를 들을 방법이 없다."
                그 공백을 채우기 위해 판교 IT 생태계와 청소년 글쓰기를 연결하는
                생각의 숲을 만들었습니다.
              </p>
              <p>
                Claude Code 기반 AI 시스템을 직접 구현하고, 출판사 느린서재와
                파트너십을 맺어 청소년의 글이 실제 서점에 놓이는 구조를 만들었습니다.
              </p>
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-forest-700 bg-forest-100 px-3 py-1.5 rounded-full border border-forest-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 인용구 카드 */}
          <div className="bg-forest-900 rounded-2xl p-10 text-cream">
            <div className="text-forest-400 text-5xl font-serif leading-none mb-6">"</div>
            <blockquote className="font-serif text-xl leading-relaxed text-cream/90 mb-8">
              사고하고 비판해보는 시도 자체가 소중했다.
              내 이름이 적힌 책이 실제로 나왔다는 게
              믿기지 않았다.
            </blockquote>
            <div className="text-forest-400 text-sm">
              — 생각의 숲 1기 참여 학생
            </div>

            <div className="mt-10 pt-8 border-t border-forest-800">
              <div className="text-cream/50 text-xs mb-1">출판 파트너</div>
              <div className="text-cream font-medium text-sm">느린서재 · 스몰빅클래스(구독자 24만)</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
