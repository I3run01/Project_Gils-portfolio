import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { BackgroundStyled } from './styled'

export const BackGround = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <BackgroundStyled
         theme={state.theme.status}>
            <div id='rightCircle'></div>
            <div id='leftCircle'></div>
        </BackgroundStyled>
    )
}