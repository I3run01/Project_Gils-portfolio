import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { MainStyled } from './globalStyled'
import { Cape } from './components/Cape/index'
import { BackGround } from './components/bk'
 
function App() {

  return (
    <MainStyled>
      <Cape/>
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>  
    </MainStyled>
  )
}

export default App
