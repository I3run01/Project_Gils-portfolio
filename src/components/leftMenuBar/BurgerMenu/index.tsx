import { useContext, useState } from "react"
import { Context } from "../../../contexts/Context"
import { BurguerMenuStyled } from "./styled"

type Props = {
    fction: () => void
}

export const BurguerMenu = ({fction}:Props) => {
    const [openMenu, setOpenMenu] = useState<string>('menuOpened')
    const [mouseIn, setMouseIn] = useState<boolean>(false)

    const {state, dispatch} = useContext(Context)

    const ChangeMenu = () => {
        if(openMenu == 'menuClosed') setOpenMenu('menuOpened')
        else setOpenMenu('menuClosed')

        fction()
    }

    return (
        <BurguerMenuStyled 
            onClick={ChangeMenu}
            onMouseEnter={()=>{setMouseIn(true)}}
            onMouseLeave={()=> {setMouseIn(false)}}
            mouseIn={mouseIn}
            theme={state.theme.status}
            id='burguerMenu'>
            <div className={`line01 line01${openMenu}`}/>
            <div className={`line02 line02${openMenu}`}/>
            <div className={`line03 line03${openMenu}`}/>
        </BurguerMenuStyled>
    )
}