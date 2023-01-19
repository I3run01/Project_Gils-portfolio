import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { Cape } from './components/Cape/index'
import { BackGround } from './components/bk'

function App() {

  return (
    <div>
      <Cape/>
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>  
    </div>
  )
}

export default App
