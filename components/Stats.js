const stats = [
  { number: '100%', label: '1기 완주율', sub: '7명 전원 완주' },
  { number: '1종', label: '정식 출판', sub: '전국 서점 유통' },
  { number: '24만', label: '파트너 채널', sub: '스몰빅클래스 구독자' },
]

export default function Stats() {
  return (
    <section className="bg-cream-dark border-y border-forest-100">
      <div className="container-max mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-forest-100">
          {stats.map((s) => (
            <div key={s.label} className="py-8 sm:py-4 sm:px-12 first:pl-0 last:pr-0">
              <div className="font-serif text-5xl font-semibold text-forest-800 mb-1">
                {s.number}
              </div>
              <div className="font-medium text-forest-900 mb-1">{s.label}</div>
              <div className="text-sm text-forest-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
