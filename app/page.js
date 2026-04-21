import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Timeline from '../components/Timeline'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Timeline />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
