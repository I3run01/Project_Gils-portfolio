import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import {Cape} from './components/Cape/index'

function App() {

  return (
    <div>
      <Cape/>
      <RightMenuBar/>
      <LeftMenuBar/>  
    </div>
  )
}

export default App
