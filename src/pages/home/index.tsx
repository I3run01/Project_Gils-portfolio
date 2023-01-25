import { MainStyled } from '../../globalStyled'
import { Cape } from '../../components/Home/Cape/index'
import { About } from '../../components/Home/About'
import { Experince } from '../../components/Home/Experince'
import { Depositions } from '../../components/Home/Depositions'
import { Footer } from '../../components/GlobalComponents/footer'

export const Home = () => {

    return (
        <div>
            <Cape/>
            <MainStyled>
                <About/>
                <Experince/>
                <Depositions/>
            </MainStyled>
        </div>
    )
}