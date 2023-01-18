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
                    <div>
                        <img src="menuIcons/About.svg" alt="" />
                        <h2>Começo</h2>
                    </div>
                </div>  
                <div id="workIcon">
                    <div>
                        <img src="menuIcons/Facility.svg" alt="" />
                        <h2>Facilitadora</h2>
                    </div>
                    <div>
                        <img src="menuIcons/Services.svg" alt="" />
                        <h2>Serviços</h2>
                    </div>
                    <div>
                        <img src="menuIcons/Teacher.svg" alt="" />
                        <h2>Professora</h2>
                    </div>
                </div>
                <div id="themeIcon">
                    <div>
                        <img src="menuIcons/Moon.svg" alt="" />
                        <h2>Escuro</h2>
                    </div>  
                </div>
            </div>
        </LeftMenuBarStyled>
    )
}