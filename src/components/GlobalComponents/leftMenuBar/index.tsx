import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import {useContext, useState } from "react"
import { Context } from "../../../contexts/Context"
import { useNavigate } from "react-router-dom"

export const LeftMenuBar = () =>{
    const {state, dispatch} = useContext(Context)

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState<string>('closed')

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

    const Navigation = (route: string) => {
        navigate(route)
    }


    return (
        <LeftMenuBarStyled 
        theme={state.theme.status}
        className={menuOpen
        }>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>
                <div id="AboutIcon" onClick={() => Navigation('/')}>
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
                    <div onClick={() => Navigation('/contentTeacher')}>
                        <img src="menuIcons/Teacher.svg" alt="" />
                        <h2>Professora conteudista</h2>
                    </div>
                </div>
                <div id="themeIcon">
                    <div onClick={changeTheme}>
                        <img src={state.theme.status === 'dark' ? 'menuIcons/Sun.svg' : 'menuIcons/Moon.svg'} alt="" />
                        <h2>{state.theme.status === 'dark' ? 'Claro' : 'Escuro'}</h2>
                    </div>  
                </div>
            </div>
        </LeftMenuBarStyled>
    )
}