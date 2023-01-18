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
            </div>
        </LeftMenuBarStyled>
    )
}