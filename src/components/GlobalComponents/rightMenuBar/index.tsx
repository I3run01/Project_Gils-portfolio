import { IconRightMenuBar } from "./hoverButton"
import { RightMenuBarStyled } from "./styled"
import { LinkedInIcon } from "./Icons/Icons"
import { CvIcon } from "./Icons/Icons"
import { InstagramIcon } from "./Icons/Icons"
import { WhatsAppIcon } from "./Icons/Icons"
import { useContext, useState } from "react"
import { Context } from "../../../contexts/Context"

export const RightMenuBar = () => {
    const {state, dispatch} = useContext(Context)
    const [sideMenhOpenedOrClosed, setSideMenhOpenedOrClosed] = useState<string>('closed')


    const closerOrOpenMenu = () => {
        sideMenhOpenedOrClosed === 'closed' ? setSideMenhOpenedOrClosed('opened') : setSideMenhOpenedOrClosed('closed')
    }

    return (
        <RightMenuBarStyled
        theme={state.theme.status}>
            <IconRightMenuBar
            ftcion={closerOrOpenMenu}/>
            <div className={`container ${sideMenhOpenedOrClosed}`}>
                <div className="Icons">
                    <a href="https://api.whatsapp.com/send?phone=5515981030949" target="_black"><WhatsAppIcon/></a>
                    <a href="https://www.linkedin.com/in/gilchaves/" target="_black"><LinkedInIcon/></a>
                    <a href='CV/CV - Gil Chaves.pdf' target="_black"><CvIcon/></a>
                    <a href="https://www.instagram.com/gilapchaves/" target="_black"><InstagramIcon/></a>
                </div>
                <div className="topLine"></div>
                <div className="bottomLine"></div>
            </div>
        </RightMenuBarStyled>
    )
}