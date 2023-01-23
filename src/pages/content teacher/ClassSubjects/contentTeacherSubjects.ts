type gallary = {
    images: string[]
}

type colors = {
    colorRight_1: string
    colorRight_2: string
    colorLeft_1: string
    colorLeft_2: string
}

export class contentTeacherSubjects {
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
    new contentTeacherSubjects(
        'Robótica',
        'contentTeacher/roticsIcon.svg',
        'contentTeacher/roticsImage.png',
        `Robótica é a área da tecnologia que se ocupa com o projeto, construção, operação e uso de robôs, bem como sistemas de computador para seu controle, feedback sensorial e processamento de informações. Essas tecnologias são usadas para desenvolver máquinas que podem substituir as funções humanas ou aumentar as habilidades humanas. A robótica envolve uma variedade de campos, incluindo engenharia mecânica, engenharia elétrica e ciência da computação. A robótica pode ser usada em uma ampla gama de aplicações, como fabricação, transporte, agricultura, saúde e muito mais.`,
        images = [
            'contentTeacher/roboticsGallary/image 1.png',
            'contentTeacher/roboticsGallary/image 2.png',
            'contentTeacher/roboticsGallary/image 3.png',
            'contentTeacher/roboticsGallary/image 4.png',
            'contentTeacher/roboticsGallary/image 5.png',
            'contentTeacher/roboticsGallary/image 6.png',
            'contentTeacher/roboticsGallary/image 7.png',
            'contentTeacher/roboticsGallary/image 8.png',
            'contentTeacher/roboticsGallary/image 9.png',
            'contentTeacher/roboticsGallary/image 10.png',
            'contentTeacher/roboticsGallary/image 11.png'
        ],
    )
]
