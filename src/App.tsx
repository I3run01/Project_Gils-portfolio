import { LeftMenuBar } from './components/GlobalComponents/leftMenuBar'
import { RightMenuBar } from './components/GlobalComponents/rightMenuBar'
import { BackGround } from './components/GlobalComponents/bk'
import { Footer } from './components/GlobalComponents/footer'
import { GlobalStyled } from './globalStyled'
import { MainRoutes } from './routes/mainRoutes'
 
function App() {

  return (
    <GlobalStyled>   
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>
      <MainRoutes/>
      <Footer/>
    </GlobalStyled>
  )
}


export default App
