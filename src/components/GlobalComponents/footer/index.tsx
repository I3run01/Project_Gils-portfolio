import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { FooterStyled } from './styled'

export const Footer = () => {

    const {state, dispatch} = useContext(Context)

    return (
        <FooterStyled theme={state.theme.status}>
            <div id='apresentation'>
                <div id='photo'>
                    <img src="Footer/Bruno's photo.png" alt="" />
                </div>
                <div id='text'>
                    <h2>Projeto criado por</h2>
                    <h1>Bruno A.V</h1>
                </div>
            </div>
            <div id='socialMedias'>
                <div id='mediasTXT'>
                    <p>Redes sociais</p>
                </div>
                <div id='allMedias'>
                    <a href="" target="_black"><img src="Footer/icons/cv.svg" alt="" /></a>
                    <a href="" target="_black"><img src="Footer/icons/github.svg" alt="" /></a>
                    <a href="" target="_black"><img src="Footer/icons/instagram.svg" alt="" /></a>
                    <a href="" target="_black"><img src="Footer/icons/linkedIn.svg" alt="" /></a>
                    <a href="" target="_black"><img src="Footer/icons/telegram.svg" alt="" /></a>
                    <a href="" target="_black"><img src="Footer/icons/whatsapp.svg" alt="" /></a>
                    
                </div>
            </div>
        </FooterStyled>
    )
}