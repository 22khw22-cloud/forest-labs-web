const features = [
  {
    icon: '✦',
    title: '정말 책이 나옵니다',
    desc: '자가출판이 아닙니다. 느린서재와의 정식 계약으로 ISBN이 등록된 책이 교보문고·예스24 전국 서점에 유통됩니다. 1기 7명 전원 출판 완료로 이미 검증된 모델입니다.',
    highlight: '정식 ISBN · 전국 서점 유통',
  },
  {
    icon: '◈',
    title: 'AI 사고 성장 리포트',
    desc: '매주 제출된 원고를 Claude AI가 4개 축(논리구조·관점다양성·감정표현·수정반응성)으로 분석해 학부모에게 개인화 리포트를 발송합니다. 수강생이 늘어도 코칭 품질이 유지됩니다.',
    highlight: '데이터로 보이는 성장',
  },
  {
    icon: '◉',
    title: '판교 IT 현직자 멘토링',
    desc: '판교 테크노밸리의 개발자·기획자를 직접 만나 이야기를 듣고, 청소년이 직접 인터뷰하여 책으로 엮습니다. 어떤 교재로도 대체할 수 없는 진로 자산입니다.',
    highlight: '판교 IT 생태계 직접 접촉',
  },
]

export default function Features() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-max">

        <div className="mb-16">
          <p className="text-forest-500 text-sm font-medium tracking-widest uppercase mb-4">
            Why 생각의 숲
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forest-950 leading-tight">
            다른 프로그램과
            <br />
            결정적으로 다른 3가지
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-forest-50 rounded-2xl p-8 border border-forest-100 hover:border-forest-300 transition-colors group"
            >
              <div className="text-forest-500 text-2xl mb-6">{f.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-forest-950 mb-3">
                {f.title}
              </h3>
              <p className="text-forest-700 text-sm leading-relaxed mb-6">
                {f.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-forest-600 bg-forest-100 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                {f.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
