import { DepositionStyled } from './styled'
import { Users } from './classDepositions/classDeposition'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export const Depositions = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <DepositionStyled
        theme={state.theme.status}>
            <h1>Depoimentos</h1>

            {
                Users.map((item, index) => {
                    return (
                        <div className='container'>
                            <div className='business'>
                                <div className='photo'>
                                    <img src={item.Photo} alt="" />
                                </div>
                                <div className='text'>
                                    <h3>{item.Name}</h3>
                                    <h4>{item.Relation}</h4>
                                </div>
                            </div>

                            <p className='describe'>{item.Describe}</p>
                        </div>
                    )
                })
            }
        </DepositionStyled>
    )
}