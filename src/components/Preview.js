import { decode } from 'js-base64'
import { ShowProfile } from './ShowProfile'
import { Links } from './Links'
import { Footer } from './Footer'

//~ http://localhost:8000/#/eyJwcm9maWxlIjp7InRodW1ibmFpbCI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL3dvbWVuLzY1LmpwZyIsInRpdGxlIjoiZXRlcnRlciIsIm5pY2tuYW1lIjoidGVydGVydGVyIiwiZGVzY3JpcHRpb24iOiJlcnRlcnRlcnRlcnQifSwibGlua3MiOlt7ImlkIjoiNzkxNmZjNDctMDg5Yy00OTI0LTk5NzItZWExZTNhNjAwODk0IiwidGl0bGUiOiJlcnRlcnRlcnRlcnRlciIsInVybCI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL3dvbWVuLzY1LmpwZyJ9LHsiaWQiOiJmMmYxNGU3OS1mMGI2LTQzOTUtOTA4Ny0wNjM5NDlkZjM4OTkiLCJ0aXRsZSI6ImVydGVydGVydGVydGVyIiwidXJsIjoiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvd29tZW4vNjUuanBnIn0seyJpZCI6IjcxMTEyZDZjLWVmNjYtNGVkNS05YmMzLTc2ZDQ1YTdmNDJjYiIsInRpdGxlIjoiZXJ0ZXJ0ZXJ0ZXJ0ZXIiLCJ1cmwiOiJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy93b21lbi82NS5qcGcifSx7ImlkIjoiNmI1NDY2ODgtYWViYy00MTJmLTlkMWUtNzc2OTMwNzA1YjkwIiwidGl0bGUiOiJlcnRlcnRlcnRlcnRlciIsInVybCI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL3dvbWVuLzY1LmpwZyJ9XX0)

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
