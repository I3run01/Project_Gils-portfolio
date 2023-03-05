type work = {        

    job: string
    local:string
    describe: string
    skill:string
    start: {
        startMonth: number
        startYear: number
    }
    end: {
        endMonth: number | 'atualmente'
        endYear: number | 'atualmente'
    }
    
}[]

export class Experince {
    private business: string
    private imgBusiness: string
    private work:work

    constructor(business:string,imgBusiness:string, work:work) {
        this.business = business
        this.work = work
        this.imgBusiness = imgBusiness
    }

    public get businessName () {
        return this.business
    }

    public get imageFile () {
        return this.imgBusiness
    }

    public get workinformation () {
        return this.work
    }
}

export const Jobs = [
    new Experince(
        'PUCPR',
        'businessIcons/PUCPR icon.png',
        [
            {
                job: 'Analista de Tecnologia da Informação Jr',
                local: 'Curitiba, Paraná, Brasil',
                describe: `Responsável pelo suporte aos usuários, docentes e estudantes da plataforma AVA, atendimento das demandas informatizadas do EAD, realização de consultas em banco de dados SQL Server e PostgreSQL, ações de formação e capacitação de usuários, elaboração de tutoriais e acompanhamento da qualidade dos processos.`,
                skill: 'Desenvolvimento de conteúdo · GitBook · Design thinking · Programação lógica · Empreendedorismo · Letramento digital',
                start: {
                    startMonth: 11,
                    startYear: 2021,
                }
                ,
                end:{
                    endMonth: 'atualmente',
                    endYear: 'atualmente'
                },
            }
        ]
    ),
    new Experince(
        'TechJá',
        'businessIcons/JA Brasil Icon.png',
        [
            {
                job: 'Facilitadora de TI',
                local: 'Curitiba, Paraná, Brasil',
                describe: `Facilitação online no programa TECH.JÁ, que tem o apoio do Google.org e do BID Lab. O curso prepara jovens de 18 a 29 anos para entrar no mercado de TI por meio de 5 pilares principais: Fundamentos de suporte técnico, Os bits e bytes de redes de computadores,
                Sistemas operacionais, Administração de sistema e serviços de infraestrutura de TI e Segurança em TI. Os jovens também trabalham e desenvolvem habilidades socioemocionais no decorrer das aulas e participam de palestras com especialistas da área.`,
                skill: 'Suporte técnico · Hardware de computador · Redes de computadores · Sistemas operacionais · Administração de sistemas · Gestão de segurança da informação',
                start: {
                    startMonth: 2,
                    startYear: 2021,
                },
                end:{
                    endMonth: 12,
                    endYear: 2022
                },
                
            },
            {
                job: 'Professora conteudista e Facilitadora',
                local: 'Curitiba, Paraná, Brasil',
                describe: `Criação de toda a experiência do curso Desafio Tech, aprendizagem do aluno por meio de slides, enredos, atividades e também do professor, por meio do GitBook, um gerador de sites com base em arquivos markdown. Facilitação do curso com 2 turmas de jovens da cidade de Arari-MA, com encontros online por meio do Microsoft Teams. O programa teve parceria com a Microsoft e Fundação Vale.`,
                skill: 'Desenvolvimento de conteúdo · GitBook · Design thinking · Programação lógica · Empreendedorismo · Letramento digital',
                start: {
                    startMonth: 6,
                    startYear: 2021,
                }
                ,
                end:{
                    endMonth: 9,
                    endYear: 2022
                },
                
            }
        ],
    ),
    new Experince(
        'Discovery Talents Education',
        'businessIcons/DTE.png',
        [
            {
                job: "Coordenadora Técnica Pedagógica de Robótica",
                local: 'Curitiba, Paraná, Brasil',
                describe: `Coordenar e ministrar aulas de robótica educacional presencial e on-line, auxiliar os alunos com dúvidas, fazer o acompanhamento do desempenho, controle da evasão e prospecção de futuros alunos.`,
                skill: 'Arduino · SolidWorks · Liderança · Scratch (Linguagem de programação) · Robótica · BBC micro:bit',
                start: {
                    startMonth: 2,
                    startYear: 2020,
                },
                end:{
                    endMonth: 9,
                    endYear: 2021
                },
                
            },
        ],
    ),
    new Experince(
        'JA Brasil',
        'businessIcons/JA Brasil Icon.png',
        [
            {
                job: 'Facilitadora HTML e CSS',
                local: 'Curitiba, Paraná, Brasil',
                describe: `Ministrar aula remotas, orientação dos alunos no plantão de dúvidas e acompanhamento de desempenho nas atividades diárias e entregas semanais, para a conclusão e publicação do site em HTML e CSS por meio do GitHub Pages. Participação na implementação de estratégias que minimizam o risco de evasão.`,
                skill: 'HTML · GitHub · CSS · Visual Studio Code',
                start: {
                    startMonth: 7,
                    startYear: 2020,
                },
                end:{
                    endMonth: 9,
                    endYear: 2020
                },
                
            },
        ],
    ),
    new Experince(
        'Dream School Brasil',
        'businessIcons/DS.png',
        [
            {
                job: 'Coordenadora Educacional',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Orientação dos alunos segundo a metodologia de ensino, auxílio de alunos e não alunos no processo de encaminhamento profissional, instalação de softwares, controle de andamento, conclusão, evasão e opinião dos alunos.`,
                skill: 'Treinamento de funcionários · Microsoft Excel · Liderança',
                start: {
                    startMonth: 7,
                    startYear: 2018,
                },
                end:{
                    endMonth: 1,
                    endYear: 2020
                },
                
            },
        ],
    ),
    new Experince(
        'Preparas CUrsos',
        'businessIcons/Prepara Icon.png',
        [
            {
                job: 'Coordenadora EAndragógica',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Ajudar no esclarecimento de dúvidas dos alunos segundo a metodologia de ensino, realização de dinâmicas com os alunos em sala de aula, instalação de softwares, manutenção preventiva, testes dos novos cursos, orientação e preparação dos alunos para o mercado de trabalho, reuniões com pais e responsáveis, emissão de relatórios de presenças e faltas, desempenho, acompanhamento e elaboração de estratégias para evitar a evasão dos alunos, treinamento de colaboradores.`,
                skill: 'Treinamento de funcionários · Microsoft Excel · Liderança',
                start: {
                    startMonth: 12,
                    startYear: 2014,
                },
                end:{
                    endMonth: 8,
                    endYear: 2018
                },
                
            },
            {
                job: 'Professora',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Ajudar no esclarecimento de dúvidas dos alunos segundo a metodologia de ensino, realização de dinâmicas com os alunos em sala de aula, instalação de softwares, manutenção preventiva, testes dos novos cursos, orientação e preparação dos alunos para o mercado de trabalho, reuniões com pais e responsáveis.`,
                skill: 'Visual Basic · VBA (Visual Basic for Applications) · Delphi · AutoCAD · Desenvolvimento de Games 2D',
                start: {
                    startMonth: 9,
                    startYear: 2013,
                },
                end:{
                    endMonth: 11,
                    endYear: 2014
                },
                
            },
        ],
        
    ),
    new Experince(
        'Info Brasil',
        'businessIcons/info Brasil.png',
        [
            {
                job: 'Instrutora de cursos profissionalizantes',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Orientar e instruir os alunos segundo a metodologia de ensino, recepção e ambientação de novos alunos, realização de aulas experimentais, instalação de softwares, testes dos novos cursos, acompanhamento de presenças e faltas, reuniões com pais e responsáveis.`,
                skill: '',
                start: {
                    startMonth: 10,
                    startYear: 2012,
                },
                end:{
                    endMonth: 10,
                    endYear: 2013
                },
                
            },
            {
                job: 'Auxiliar de sala de aula',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Auxiliar os alunos em suas dúvidas com relação aos cursos de informática e profissionalizantes, recepção e ambientação de novos alunos, realização de aulas experimentais, instalação de softwares, testes dos novos cursos.`,
                skill: '',
                start: {
                    startMonth: 10,
                    startYear: 2011,
                },
                end:{
                    endMonth: 7,
                    endYear: 2012
                },
                
            },
            {
                job: 'Estágiaria',
                local: 'Itararé, São Paulo, Brasil',
                describe: `Auxiliar os alunos em suas dúvidas com relação aos cursos de informática e profissionalizantes.`,
                skill: '',
                start: {
                    startMonth: 10,
                    startYear: 2010,
                },
                end:{
                    endMonth: 7,
                    endYear: 2011
                },
                
            },
        ],
        
    ),
]