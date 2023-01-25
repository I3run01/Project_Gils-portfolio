import { MainStyled } from '../../globalStyled'
import { Cape } from '../../components/Home/Cape/index'
import { About } from '../../components/Home/About'
import { Experince } from '../../components/Home/Experince'
import { Depositions } from '../../components/Home/Depositions'
import { useContext, useEffect } from 'react'
import { Context } from '../../contexts/Context'

export const Home = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        changeBkColor() 
    },[])

    const changeBkColor = () => {

        dispatch({
            type: 'changeRightColor_1',
            payload: {
                rightColor_1: '#404ABF'
            }
        })

        dispatch({
            type: 'changeRightColor_2',
            payload: {
                rightColor_2: '#8C33CC'
            }
        })

        dispatch({
            type: 'changeLeftColor_1',
            payload: {
                leftColor_1: '#CC3DAA'
            }
        })

        dispatch({
            type: 'changeLeftColor_2',
            payload: {
                leftColor_2: '#322BD9'
            }
        })
    }

    

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