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
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        [],
        {
            colorRight_1: '#6D8C7E',
            colorRight_2: '#A65A53',
            colorLeft_1: '#168C80',
            colorLeft_2: '#4BF2D4',
        }
    ),
] 
