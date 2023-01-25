type gallary = string[]
type colors = {
    colorRight_1: string
    colorRight_2: string
    colorLeft_1: string
    colorLeft_2: string
}

export class facilityClass {
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

export const contentTeacherObj = [
    new facilityClass(
        'Suporte TI',
        'facility/IT support/support IT icon.svg',
        'facility/IT support/support IT Image.svg',
        `Alguém que trabalha com suporte em TI é responsável por fornecer assistência técnica aos usuários de computadores e outros dispositivos eletrônicos. Isso pode incluir ajudar os usuários a resolver problemas técnicos, instalar e configurar software, resolver problemas de rede e garantir que os sistemas estejam funcionando corretamente. Eles também podem fornecer treinamento e orientação sobre como usar os equipamentos e software.`,
        [],
        {
            colorRight_1: '#605951',
            colorRight_2: '#A65A53',
            colorLeft_1: '#168C80',
            colorLeft_2: '#304144',
        }
    ),

    
] 
