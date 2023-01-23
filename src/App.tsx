import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { GlobalStyled } from './globalStyled'
import { BackGround } from './components/bk'
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
