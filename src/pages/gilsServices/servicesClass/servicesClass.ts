type gallary = string[]
type colors = {
    colorRight_1: string
    colorRight_2: string
    colorLeft_1: string
    colorLeft_2: string
}

export class servicesClass {
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

export const servicesObj = [
    new servicesClass (
        'Excel',
        'contentTeacher/Excel/excelIcon.svg',
        'contentTeacher/Excel/ExcelImage.png',
        `Excel é uma planilha eletrônica desenvolvida pela Microsoft. Ele permite criar e editar planilhas com cálculos, gráficos e tabelas, além de oferecer diversas ferramentas de análise de dados e de automação de tarefas. É amplamente utilizado para gerenciamento de dados, análise financeira e outras tarefas de negócios.`,
        [],
        {
            colorRight_1: '#03733F',
            colorRight_2: '#365943',
            colorLeft_1: '#F2916D',
            colorLeft_2: '#BF4A3F',
        }
    )
    
] 
