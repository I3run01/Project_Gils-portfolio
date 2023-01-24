import { ChangeWorkStyled } from './styled'

type props = {
    title: string
    icon: string
    changeWorkLeft: () => void
    changeWorkRight: () => void
}

export const ChangeWork = ({title, icon, changeWorkLeft, changeWorkRight}: props) => {

    return (
        <ChangeWorkStyled>
            <div id='showWork'>
                <div id='symble'> <img src={icon} alt="" /></div>
                <div id='nameOfwork'>{title}</div>
            </div>
        </ChangeWorkStyled>
    )
}