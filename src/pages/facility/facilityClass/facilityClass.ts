type gallary = string[]
type colors = {
    colorRight_1: string
    colorRight_2: string
    colorLeft_1: string
    colorLeft_2: string
}

export class facilitySubjects {
    private _title: string;
    private _icon: string;
    private _image: string;
    private _description: string;
    private _gallary: gallary;
    private _colors: colors

    constructor(title: string, icon: string, image: string, description: string, gallary: gallary, colors: colors) {
        this._title = title;
        this._icon = icon;
        this._image = image;
        this._description = description;
        this._gallary = gallary;
        this._colors = colors
    }

    get title(): string {
        return this._title;
    }

    get icon(): string {
        return this._icon;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }

    get gallary(): gallary {
        return this._gallary;
    }

    get colors(): colors {
        return this._colors;
    }
}

export const facilityObj = [
    new facilitySubjects(
        'Suporte em TI',
        'facility/IT support/support IT icon.svg',
        'facility/IT support/support IT Image.png',
        `Alguém que trabalha em suporte de TI é responsável por ajudar os usuários de uma empresa ou organização com problemas relacionados à tecnologia, como computadores, rede, software, dispositivos móveis e sistemas. Isso pode incluir coisas como resolver problemas de hardware ou software, configurar dispositivos, ajudar com a instalação de software e fornecer orientação sobre como usar diferentes tecnologias. O suporte de TI também pode incluir a manutenção preventiva e a monitoração de sistemas para garantir que eles estejam funcionando corretamente.`,
        [],
        {
            colorRight_1: '#6D8C7E',
            colorRight_2: '#A65A53',
            colorLeft_1: '#168C80',
            colorLeft_2: '#4BF2D4',
        }
    ),
    new facilitySubjects(
        'Facilitadora HTML e CSS',
        'facility/HTML e CSS/HtmlCss icon.svg',
        'facility/HTML e CSS/HTML e CSS image.png',
        `HTML (Hypertext Markup Language) é uma linguagem de marcação utilizada para criar páginas da web. Ele é usado para estruturar o conteúdo de uma página, como texto, imagens, vídeos e links. As tags HTML são usadas para indicar diferentes elementos da página, como cabeçalhos, parágrafos, listas e tabelas.

        CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência visual de uma página HTML. Ele é usado para controlar coisas como cor de fundo, tipos de letra, espaçamento e posicionamento de elementos na página. As regras CSS são aplicadas a elementos HTML específicos, permitindo que você dê estilo consistente a toda a sua página ou site.`,
        [],
        {
            colorRight_1: '#F2D091',
            colorRight_2: '#F29D35',
            colorLeft_1: '#BF382C',
            colorLeft_2: '#593A15',
        }
    ),
] 
