import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { ChangeWorkStyled } from './styled'

type props = {
    title: string
    icon: string
    changeWorkLeft: () => void
    changeWorkRight: () => void
}

export const ChangeWork = ({title, icon, changeWorkLeft, changeWorkRight}: props) => {
    const {state, dispatch} = useContext(Context)

    return (
        <ChangeWorkStyled
        theme={state.theme.status}>
            <div id='showWork'>
                <div id='symble'> <img src={icon} alt="" /></div>
                <div id='nameOfwork'>{title}</div>
            </div>
        </ChangeWorkStyled>
    )
}