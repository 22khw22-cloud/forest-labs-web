import './globals.css'

export const metadata = {
  title: '생각의 숲 — 청소년이 정말 책을 내는 프로그램',
  description: '사고력 글쓰기 + 정식 출판 + 판교 IT 현직자 멘토링. 청소년이 실제로 책을 출간하는 유일한 프로그램.',
  openGraph: {
    title: '생각의 숲',
    description: '청소년이 정말 책을 내는 프로그램',
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
