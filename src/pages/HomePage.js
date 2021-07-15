import { useLocationHash } from '../hooks/useLocationHash'
import { ShowProfile } from '../components/ShowProfile'

export default () => {
  if (useLocationHash()) return <ShowProfile />
  
  return (<h1>HomePage ...</h1>)
}
