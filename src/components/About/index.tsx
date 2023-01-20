import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { ABoutStyled } from './styled'

export const About = () => {

    const {state, dispatch} = useContext(Context)

    return (
        <ABoutStyled
        theme={state.theme.status}>
            <h1>Sobre</h1>
            <div id='container'>
                <div id='image'>
                    <img src="Gil's photos/photo 2.png" alt="" />
                </div>
                <div id='text'>
                    <p>
                        Os desafios constroem a minha motivação! Sou formada em Sistemas de Informação e pós-graduada em Banco de Dados, com experiência nas áreas de Robótica, Design Gráfico, Desenvolvimento Web, Games 2D e Ferramentas CAD.

                        Sou uma profissional da área de TI e atuo como Analista de Tecnologia da Informação Jr. No meu dia a dia sou responsável pelo suporte aos usuários, docentes e estudantes da plataforma AVA, realizo consultas em banco de dados como apoio à tomada de decisões e desenvolvo tutoriais que capacitam os usuários a utilizarem a plataforma AVA.

                        Sou voluntária na Junior Achievement Paraná, que busca estimular e desenvolver os jovens para o mercado de trabalho, através do método learn by doing.

                        Atuante em projetos de Robótica Educacional, desenvolvo montagens e manuais de robótica com kit específico, por meio do SolidWorks.

                        Apaixonada por educação e tecnologia, adoro aprender algo novo todos os dias e compartilhar com as pessoas ♥
                    </p>
                </div>
            </div>
        </ABoutStyled>
    )
}