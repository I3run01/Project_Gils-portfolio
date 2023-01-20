import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { GlobalStyled } from './globalStyled'
import { MainStyled } from './globalStyled'
import { BackGround } from './components/bk'
import { Cape } from './components/Cape/index'
import { About } from './components/About'
import { Experince } from './components/Experince'
 
function App() {

  return (
    <GlobalStyled>   
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>
      <Cape/>
      <MainStyled>
        <About/>
        <Experince/>
      </MainStyled>
      
    </GlobalStyled>
  )
}

export default App
