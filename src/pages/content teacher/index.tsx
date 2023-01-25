import { useContext, useEffect, useState } from 'react'
import { AboutJob } from '../../components/Jobs/AboutJob'
import { WorksTypes } from '../../components/Jobs/worksTypes'
import { Gallary } from '../../components/Jobs/Gallary/'
import { ChangeWork } from '../../components/Jobs/changeWork'
import { MainStyled } from '../../globalStyled'
import { contentTeacherObj } from './ClassSubjects/contentTeacherSubjects'
import { Context } from '../../contexts/Context'

export const ContentTeacher = () => {
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
                rightColor_2: 'green'
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
                    title='Professora conteúdista'
                    subtitile='O que faz uma professora conteúdista?'
                    description="Uma professora conteudista é responsável por desenvolver o conteúdo de ensino e as estratégias de ensino para uma determinada disciplina ou área de estudo. Isso inclui a seleção e adaptação de materiais de ensino, a elaboração de planos de aula e a avaliação do progresso dos alunos. Ela também pode fornecer orientação e treinamento a outros professores, ajudando-os a implementar o conteúdo e as estratégias de ensino de maneira eficaz."
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