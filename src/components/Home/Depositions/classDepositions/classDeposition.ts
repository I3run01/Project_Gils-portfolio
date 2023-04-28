export class deposition {
    private name: string
    private relation: string
    private photo: string
    private describe: string

    constructor(name:string, relation:string, photo:string, describe:string) {
        this.name = name
        this.relation = relation
        this.photo = photo
        this.describe = describe
    }

    public get Name () {
        return this.name
    }

    public get Relation () {
        return this.relation
    }

    public get Photo () {
        return this.photo
    }

    public get Describe () {
        return this.describe
    }
}

export const Users = [
    new deposition(
        'Ariane Brunetti', 
        'Colega de trabalho',
        'Depositions/Ariane Brunetti.jpg',
        `Profissional multidisciplinar! Visão sistêmica; se adapta às mudanças, assertiva e muito organizada. É muito fácil trabalhar com a Gil; acolhedora e firme nas suas ações. Lembro da entrevista que fiz contigo, que virou mais um bate papo tranquilo e dinâmico sem a pressão de conquistar uma vaga. 
        Além de super competente é muito gentil, tem olhar e o coração para o social e quer gerar impactos positivos compartilhando o seu conhecimento com as pessoas! 
        Obrigada por me deixar fazer parte da sua história! `
    ),
    new deposition(
        'Willian Szarnik', 
        'Aluno',
        'Depositions/Willian Szarnik.jpg',
        `Gil e a melhor facilitadora que conheci me ajudou muito em todo o curso e sempre trabalhava para deixar o conteúdo mais didático, muito pro ativa. de longe a melhor professora que tive em toda a minha vida.`
    ),

]