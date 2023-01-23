import { MainStyled } from '../../globalStyled'
import { Cape } from '../../components/Cape/index'
import { About } from '../../components/About'
import { Experince } from '../../components/Experince'
import { Depositions } from '../../components/Depositions'

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