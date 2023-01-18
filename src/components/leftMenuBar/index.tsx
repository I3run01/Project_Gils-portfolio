import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const LeftMenuBar = () =>{
    const {state, dispatch} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState<string>('opened')

    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }


    return (
        <LeftMenuBarStyled className={menuOpen}>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>    
                <a href="CoverIndex"> · {'cover'}</a>
                <a href="AboutIndex"> · {'about'}</a>
                <a href="ExperiencesIndex"> · {'Experiences'}</a>
                <a href="skillsIndex"> · {'skills'}</a>
                <a href="projectsIndex"> · {'projects'}</a>
            </div>
        </LeftMenuBarStyled>
    )
}