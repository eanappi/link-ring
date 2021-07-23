import { decode } from 'js-base64'
import { ShowProfile } from './ShowProfile'
import { Links } from './Links'
import { Footer } from './Footer'

export const Preview = ({hash}) => {
  const jsonHashRaw = decode(hash)
  const jsonHash = JSON.parse(jsonHashRaw)

  return (
    <div className="relative h-screen">
      <ShowProfile profile={jsonHash.profile} />
      <Links links={jsonHash.links} />
      <div className="absolute bottom-0 mx-auto w-full">
        <Footer />
      </div>
    </div>
  )
}
