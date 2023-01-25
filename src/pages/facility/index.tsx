import { useContext, useEffect, useState } from 'react'
import { AboutJob } from '../../components/Jobs/AboutJob'
import { WorksTypes } from '../../components/Jobs/worksTypes'
import { Gallary } from '../../components/Jobs/Gallary/'
import { ChangeWork } from '../../components/Jobs/changeWork'
import { MainStyled } from '../../globalStyled'
import { facilityObj } from './facilityClass/facilityClass'
import { Context } from '../../contexts/Context'

export const Facility = () => {
    const {state, dispatch} = useContext(Context)
    const [index, setIndex] = useState<number>(0)
    const [renderGallary, setRenderGallary] = useState<boolean>(
        facilityObj[index].gallary.length > 0 ? true : false
    )

    useEffect(() => {
        facilityObj[index].gallary.length > 0 ? setRenderGallary(true) : setRenderGallary(false)
        changeBkColor()
    }, [index])

    useEffect(() => {
        changeBkColor()
    },[])

    const changeWorkLeft = () => {
        index <= 0 ? setIndex(facilityObj.length-1) : setIndex(index - 1)
    }

    const changeWorkRight = () => {
        index >= facilityObj.length-1 ? setIndex(0) : setIndex(index + 1)
    }

    const changeBkColor = () => {

        dispatch({
            type: 'changerightColor_1',
            payload: {
                rightColor_1: facilityObj[index].colors.colorRight_1
            }
        })

        dispatch({
            type: 'changerightColor_2',
            payload: {
                rightColor_2: facilityObj[index].colors.colorRight_2
            }
        })

        dispatch({
            type: 'changeleftColor_1',
            payload: {
                leftColor_1: facilityObj[index].colors.colorLeft_1
            }
        })

        dispatch({
            type: 'changeleftColor_2',
            payload: {
                leftColor_2: facilityObj[index].colors.colorLeft_2
            }
        })





    }

    return (
        <div>
            <ChangeWork
                title={facilityObj[index].title}
                icon={facilityObj[index].icon}
                changeWorkLeft={changeWorkLeft}
                changeWorkRight={changeWorkRight}/>
            <MainStyled>
                <AboutJob
                    title='Facilitdora'
                    subtitile='O que faz uma professora facilitadora?'
                    description="Uma facilitadora é alguém que ajuda a garantir que uma reunião, treinamento ou outro evento seja conduzido de maneira eficiente e produtiva. Isso pode incluir garantir que todos os participantes tenham a oportunidade de falar, ajudar a manter o evento no horário e garantir que as metas e objetivos do evento sejam alcançados.
                    "
                />
                <WorksTypes
                    title={facilityObj[index].title}
                    icon={facilityObj[index].icon}
                    image={facilityObj[index].image}
                    description={facilityObj[index].description}
                />

                { renderGallary &&
                    <Gallary
                        gallary={facilityObj[index].gallary}/>
                } 
            </MainStyled>
        </div>
    )
}