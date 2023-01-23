import { useContext, useState } from "react"
import { Context } from "../../../contexts/Context"
import { IconRightMenuBarStyled } from "./styled"

type Props = {
    ftcion: () => void
}

export const IconRightMenuBar = ({ftcion}:Props) => {
    const [menuStatus, setMenuStatus] = useState<string>('closed')
    const [onHover, setOnHover] = useState<boolean>(false)

    const {state, dispatch} = useContext(Context)

    const handleMenuBTN = () => {
        menuStatus === 'closed' ? setMenuStatus('opened') : setMenuStatus('closed')
        ftcion()
    }

    return (
        <IconRightMenuBarStyled
        onClick={handleMenuBTN}
        onMouseEnter={()=>{setOnHover(true)}}
        onMouseLeave={()=>{setOnHover(false)}}
        onHover={onHover}
        theme={state.theme.status}
        id='IconRightMenuBar'>
            <div className={`line01 line01${menuStatus}`}></div>
            <div className={`line02 line02${menuStatus}`}></div>
        </IconRightMenuBarStyled>
    )
}