import { FormLink } from '../components/FormLink'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Profile } from '../components/Profile'
import { HashMaker } from '../components/HashMaker'
import { useState } from 'react'
import { encodeURI } from 'js-base64'

export default () => {
  const [hashProfile, setHashProfile] = useState({}) 
  const [hashLinks, setHashLinks] = useState({}) 
  const [hashUrl, setHashUrl] = useState()

  const handleHashGenerate = () => {
    const jsonHash = {
      profile: hashProfile,
      links: hashLinks
    }

    setHashUrl(`https://${window.location.hostname}/#/${encodeURI(JSON.stringify(jsonHash))})`)
  }
  
  return (
    <>
      <NavBar />
      <Profile hashprofile={setHashProfile} />
      <FormLink hashlinks={setHashLinks} />
      <HashMaker hashurl={hashUrl} generate={handleHashGenerate} />
      <Footer />
    </>
  )
}
