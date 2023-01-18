import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const LeftMenuBar = () =>{
    const [menuOpen, setMenuOpen] = useState<string>('opened')

    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }


    return (
        <LeftMenuBarStyled className={menuOpen}>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>
                <div id="AboutIcon">
                    <img src="menuIcons/About.svg" alt="" />
                </div>  
                <div id="workIcon">
                    <img src="menuIcons/Facility.svg" alt="" />
                    <img src="menuIcons/Services.svg" alt="" />
                    <img src="menuIcons/Teacher.svg" alt="" />
                </div>
                <div id="themeIcon">
                    <img src="menuIcons/Moon.svg" alt="" />
                </div>
            </div>
        </LeftMenuBarStyled>
    )
}