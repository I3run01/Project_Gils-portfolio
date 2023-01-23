import { WorksTypesStyled } from './styled'

type props = {
    objects: {
        title: string
        icon: string
        image: string
        description: string
        gallary:string[]
        colors: {
            colorRight_1: string
            colorRight_2: string
            colorLeft_1: string
            colorLeft_2: string
        }
    }[]
}


export const WorksTypes = ({objects}:props) => {

    return (
        <WorksTypesStyled>
            <h1>{objects[0].title}</h1>
        </WorksTypesStyled>
    )
}