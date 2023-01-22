import { DepositionStyled } from './styled'
import { Users } from './classDepositions/classDeposition'

export const Depositions = () => {
    return (
        <DepositionStyled>
            <h1>Depoimentos</h1>

            {
                Users.map((item, index) => {
                    return (
                        <div id='container'>
                            
                        </div>
                    )
                })
            }
        </DepositionStyled>
    )
}