import Header from './components/header'
import Presentation from './components/presentation'
import Services from './components/services'
import Signature from './components/signature'
import WhoWeAre from './components/whoweare'

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <WhoWeAre />
      <Services />
      <Signature />
    </>
  )
}
