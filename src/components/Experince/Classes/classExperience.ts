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
        
    )
]