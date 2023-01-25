import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { BackgroundStyled } from './styled'

export const BackGround = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <BackgroundStyled
         theme={state.theme.status}
         rightColor_1={state.color.rightColor_1}
         rightColor_2={state.color.rightColor_2}
         leftColor_1={state.color.leftColor_1}
         leftColor_2={state.color.leftColor_2}
        >
            <div id='rightCircle'></div>
            <div id='leftCircle'></div>
        </BackgroundStyled>
    )
}