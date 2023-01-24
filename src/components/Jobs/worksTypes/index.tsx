import { useContext } from 'react'
import { Context } from '../../../contexts/Context'
import { WorksTypesStyled } from './styled'

type props = {
    title: string
    icon: string
    image: string
    description: string
}


export const WorksTypes = ({title, icon, image, description}:props) => {
    
    const {state, dispatch} = useContext(Context)

    return (
        <WorksTypesStyled theme={state.theme.status}>
            <h1>{title}</h1>
            <div id='container'>
                <div id='image'>
                    <img src={image} alt="" />
                </div>
                <div id='text'>
                    <div id='textTitle'>
                        <div id='symble'><img src={icon} alt="" /></div>
                        <div id='nameOfwork'>{title}</div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </WorksTypesStyled>
    )
}