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
] 
