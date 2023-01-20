import { ExperienceStyled } from './styled'
import { Jobs } from './Classes/classExperience'

export const Experince = () => {

    return (
        <ExperienceStyled>
            <h1>Experiência</h1>
            
            {
                Jobs.map()
            }
        </ExperienceStyled>
    )
}