import { useLocation } from 'wouter'
import { useLocationHash } from '../hooks/useLocationHash'
import { ShowProfile } from '../components/ShowProfile'
import { NavBar } from '../components/NavBar.js'
import { Hero } from '../components/Hero.js'
import { CtaEdit } from '../components/CtaEdit.js'
import { Features } from '../components/Features.js'
import { Footer } from '../components/Footer.js'

export default () => {
  const [location, setLocation] = useLocation()
  
  if (useLocationHash()) return <ShowProfile />
  
  return (
  <>
    <NavBar location={setLocation} />
    <Hero location={setLocation} />
    <CtaEdit />
    <Features location={setLocation} />
    <Footer />
  </>
  )
}
