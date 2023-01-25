import { useContext, useEffect, useState } from 'react'
import { AboutJob } from '../../components/Jobs/AboutJob'
import { WorksTypes } from '../../components/Jobs/worksTypes'
import { Gallary } from '../../components/Jobs/Gallary/'
import { ChangeWork } from '../../components/Jobs/changeWork'
import { MainStyled } from '../../globalStyled'
import { contentTeacherObj } from './ClassSubjects/facilityClass'
import { Context } from '../../contexts/Context'

export const Facility = () => {
    const {state, dispatch} = useContext(Context)
    const [index, setIndex] = useState<number>(0)
    const [renderGallary, setRenderGallary] = useState<boolean>(
        contentTeacherObj[index].gallary.length > 0 ? true : false
    )

    useEffect(() => {
        contentTeacherObj[index].gallary.length > 0 ? setRenderGallary(true) : setRenderGallary(false)
        changeBkColor()
    }, [index])

    useEffect(() => {
        changeBkColor()
    },[])

    const changeWorkLeft = () => {
        index <= 0 ? setIndex(contentTeacherObj.length-1) : setIndex(index - 1)
    }

    const changeWorkRight = () => {
        index >= contentTeacherObj.length-1 ? setIndex(0) : setIndex(index + 1)
    }

    const changeBkColor = () => {

        dispatch({
            type: 'changerightColor_1',
            payload: {
                rightColor_1: contentTeacherObj[index].colors.colorRight_1
            }
        })

        dispatch({
            type: 'changerightColor_2',
            payload: {
                rightColor_2: contentTeacherObj[index].colors.colorRight_2
            }
        })

        dispatch({
            type: 'changeleftColor_1',
            payload: {
                leftColor_1: contentTeacherObj[index].colors.colorLeft_1
            }
        })

        dispatch({
            type: 'changeleftColor_2',
            payload: {
                leftColor_2: contentTeacherObj[index].colors.colorLeft_2
            }
        })





    }

    return (
        <div>
            <ChangeWork
                title={contentTeacherObj[index].title}
                icon={contentTeacherObj[index].icon}
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
                    title={contentTeacherObj[index].title}
                    icon={contentTeacherObj[index].icon}
                    image={contentTeacherObj[index].image}
                    description={contentTeacherObj[index].description}
                />

                { renderGallary &&
                    <Gallary
                        gallary={contentTeacherObj[index].gallary}/>
                } 
            </MainStyled>
        </div>
    )
}