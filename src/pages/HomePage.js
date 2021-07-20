import { useLocation } from 'wouter'
import { useLocationHash } from '../hooks/useLocationHash'
import { ShowProfile } from '../components/ShowProfile'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { CtaEdit } from '../components/CtaEdit'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'

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
