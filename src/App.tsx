import { LeftMenuBar } from './components/GlobalComponents/leftMenuBar'
import { RightMenuBar } from './components/GlobalComponents/rightMenuBar'
import { BackGround } from './components/GlobalComponents/bk'
import { GlobalStyled } from './globalStyled'
import { MainRoutes } from './routes/mainRoutes'
 
function App() {

  return (
    <GlobalStyled>   
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>
      <MainRoutes/>
    </GlobalStyled>
  )
}


export default App
