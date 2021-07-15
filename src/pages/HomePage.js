import { useLocationHash } from '../hooks/useLocationHash'
import { ShowProfile } from '../components/ShowProfile'
import { NavBar } from '../components/NavBar.js'
import { Hero } from '../components/Hero.js'
import { CtaEdit } from '../components/CtaEdit.js'
import { Features } from '../components/Features.js'
import { Footer } from '../components/Footer.js'

export default () => {
  if (useLocationHash()) return <ShowProfile />
  
  return (
  <>
    <NavBar />
    <Hero />
    <CtaEdit />
    <Features />
    <Footer />
  </>
  )
}
