import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { BackgroundStyled } from './styled'

export const BackGround = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <BackgroundStyled
         theme={state.theme.status}>
            <img src="bkImage/bk.png" alt="" />
        </BackgroundStyled>
    )
}