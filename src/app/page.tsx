import FAQ from './components/faq'
import Footer from './components/footer'
import Header from './components/header'
import Map from './components/map'
import Presentation from './components/presentation'
import Services from './components/services'
import Signature from './components/signature'
import Testimonials from './components/testimonials'
import WhoWeAre from './components/whoweare'

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <WhoWeAre />
      <Services />
      <Signature />
      <FAQ />
      <Testimonials />
      <Map />
      <Footer />
    </>
  )
}
