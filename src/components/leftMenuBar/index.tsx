import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import {useContext, useState } from "react"
import { Context } from "../../contexts/Context"

export const LeftMenuBar = () =>{
    const {state, dispatch} = useContext(Context)

    const [menuOpen, setMenuOpen] = useState<string>('opened')

    const changeTheme = () => {
        if( state.theme.status === 'dark' ) {
            dispatch({
                type: 'changeTheme',
                payload: {
                    status: 'light'
                }
            })
        } else {
            dispatch({
                type: 'changeTheme',
                payload: {
                    status: 'dark'
                }
            })
        }
    }
    


    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }


    return (
        <LeftMenuBarStyled 
        theme={state.theme.status}
        className={menuOpen
        }>
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
                    <div onClick={changeTheme}>
                        <img src="menuIcons/Moon.svg" alt="" />
                        <h2>Escuro</h2>
                    </div>  
                </div>
            </div>
        </LeftMenuBarStyled>
    )
}