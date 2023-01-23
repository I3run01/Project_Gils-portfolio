import { useContext } from 'react'
import { Context } from "../../../contexts/Context"
import {CapeStyled} from './styled'

export const Cape = () => {

    const {state, dispatch} = useContext(Context)

    return (
        <CapeStyled
        theme={state.theme.status}>
            <div id='photoDiv'>
                <img src="Gil's photos/photo.png" alt="" />
            </div>
            <h2>Gil Chaves Portfólio</h2>
            <h3>Professora | Facilitadora | Programadora</h3>
            <div id='line'></div>
        </CapeStyled>
    )
}