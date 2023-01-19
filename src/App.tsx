import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { MainStyled } from './globalStyled'
import { Cape } from './components/Cape/index'
import { BackGround } from './components/bk'

function App() {

  return (
    <div>
      <Cape/>
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>  
      <MainStyled>
        
      </MainStyled>
    </div>
  )
}

export default App
