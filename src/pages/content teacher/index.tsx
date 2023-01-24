import { useState } from 'react'
import { AboutJob } from '../../components/Jobs/AboutJob'
import { WorksTypes } from '../../components/Jobs/worksTypes'
import { Gallary } from '../../components/Jobs/Gallary/'
import { MainStyled } from '../../globalStyled'
import { contentTeacherObj } from './ClassSubjects/contentTeacherSubjects'


export const ContentTeacher = () => {

    const [index, setIndex] = useState<number>(0)

    return (
        <div>
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
                <Gallary
                    title={contentTeacherObj[index].title}
                    gallary={contentTeacherObj[index].gallary}/>
            </MainStyled>
            
        </div>
    )
}