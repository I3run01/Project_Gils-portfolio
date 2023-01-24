import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { AboutJobStyled } from './styled'

type props = {
    title: string
    subtitile: string
    description: string
}

export const AboutJob = ({title, subtitile, description}:props) => {

    const {state, dispatch} = useContext(Context)

    return (
        <AboutJobStyled
        theme={state.theme.status}>
            <h1>{title}</h1>
            <div id='container'>
                <h2>{subtitile}</h2>
                <p>{description}</p>
            </div>
        </AboutJobStyled>
    )
}