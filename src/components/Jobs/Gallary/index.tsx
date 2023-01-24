import { useContext, useState } from 'react'
import { Context } from '../../../contexts/Context'
import { GallaryStyled } from './styled'

type props = {
    gallary: string[]
}

export const Gallary = ({gallary}:props) => {

    const {state, dispatch} = useContext(Context)
    const [image, setImage] = useState<string>(gallary[0])

    const changeImage = (image:string) => {
        setImage(image)
    }

    return (
        <GallaryStyled 
        theme={state.theme.status}
        image={image} 
        >
            <h1>Galeria</h1>
            <div id='gallary'>
                <div id='imageChoseContainer'>
                    {gallary.map((item, index) => {
                        return (
                            <div 
                            className='imageChose' 
                            onClick={() => {changeImage(item)}}
                            style={{ filter: item === image ? 'saturate(100%)' : ''}}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div id='image'>
                    <img src={image} alt="" />
                </div>
            </div>
        </GallaryStyled>
    )
}

