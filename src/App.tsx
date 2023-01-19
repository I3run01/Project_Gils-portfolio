import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { GlobalStyled } from './globalStyled'
import { Cape } from './components/Cape/index'
import { BackGround } from './components/bk'
 
function App() {

  return (
    <GlobalStyled>
      <Cape/>
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>  
    </GlobalStyled>
  )
}

export default App
