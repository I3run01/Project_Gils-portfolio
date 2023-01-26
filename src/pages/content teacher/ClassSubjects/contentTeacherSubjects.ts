type gallary = string[]
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
        'contentTeacher/Robotics/roboticsImageIcon.svg',
        'contentTeacher/Robotics/roboticsImage.png',
        `Robótica é a área da tecnologia que se ocupa com o projeto, construção, operação e uso de robôs, bem como sistemas de computador para seu controle, feedback sensorial e processamento de informações. Essas tecnologias são usadas para desenvolver máquinas que podem substituir as funções humanas ou aumentar as habilidades humanas. A robótica envolve uma variedade de campos, incluindo engenharia mecânica, engenharia elétrica e ciência da computação. A robótica pode ser usada em uma ampla gama de aplicações, como fabricação, transporte, agricultura, saúde e muito mais.`,
        [
            'contentTeacher/Robotics/roboticsGallary/image 1.png',
            'contentTeacher/Robotics/roboticsGallary/image 2.png',
            'contentTeacher/Robotics/roboticsGallary/image 3.png',
            'contentTeacher/Robotics/roboticsGallary/image 4.png',
            'contentTeacher/Robotics/roboticsGallary/image 5.png',
            'contentTeacher/Robotics/roboticsGallary/image 6.png',
            'contentTeacher/Robotics/roboticsGallary/image 7.png',
            'contentTeacher/Robotics/roboticsGallary/image 8.png',
            'contentTeacher/Robotics/roboticsGallary/image 9.png',
            'contentTeacher/Robotics/roboticsGallary/image 10.png',
            'contentTeacher/Robotics/roboticsGallary/image 11.png',
        ],
        {
            colorRight_1: '#5E5054',
            colorRight_2: '#B6424E',
            colorLeft_1: '#918575',
            colorLeft_2: '#4A7B7D',
        }
    ), 
    new contentTeacherSubjects(
        'Lógica de programação',
        'contentTeacher/programming logic/programming logic icon.svg',
        'contentTeacher/programming logic/programming logic Image.png',
        `A lógica de programação é o conjunto de técnicas e princípios utilizados para escrever algoritmos e programas de computador. Isso inclui conceitos como fluxo de controle, estruturas de decisão, laços de repetição e funções. A lógica de programação é uma habilidade fundamental para desenvolvimento de software e é ensinada em cursos de informática e ciência da computação.`,
        [],
        {
            colorRight_1: '#8C0813',
            colorRight_2: '#A69B7C',
            colorLeft_1: '#405059',
            colorLeft_2: '#5EBFAD',
        }
    ),
    new contentTeacherSubjects(
        'Introdução e desenvolvimento de jogos 2s',
        'contentTeacher/Games 2d introduction/icon.svg',
        'contentTeacher/Games 2d introduction/Image.png',
        `A introdução e desenvolvimento em jogos 2D se referem às etapas de criação de um jogo 2D. A introdução é a primeira fase do processo de desenvolvimento, onde se estabelecem as ideias básicas e objetivos do jogo, enquanto que o desenvolvimento é a fase em que essas ideias são transformadas em um jogo funcional. Isso inclui a criação de personagens, cenários, mecânicas de jogo e programação. O desenvolvimento também inclui a implementação de recursos visuais e sonoros, bem como a otimização do jogo para garantir uma boa performance.`,
        [],
        {
            colorRight_1: '#8C324A',
            colorRight_2: '#401525',
            colorLeft_1: '#F0F2BD',
            colorLeft_2: '#D9814E',
        }
    ),
    new contentTeacherSubjects (
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
    ),
    new contentTeacherSubjects (
        'Front-End',
        'contentTeacher/Front-end/icon.svg',
        'contentTeacher/Front-end/icon.svg',
        `A programação front-end, também conhecida como "desenvolvimento web client-side", é a prática de criar a interface do usuário (UI) e a interação do usuário (UX) de um site ou aplicativo web. Isso inclui a criação de elementos visuais como botões, menus, formulários e outros componentes, bem como a programação da lógica de como esses elementos se comportam e se comunicam com o usuário. A programação front-end geralmente é feita usando linguagens de marcação, como HTML, CSS e JavaScript, e frameworks e bibliotecas, como AngularJS, React e Vue.js.`,
        [],
        {
            colorRight_1: '#03733F',
            colorRight_2: '#365943',
            colorLeft_1: '#F2916D',
            colorLeft_2: '#BF4A3F',
        }
    ),
] 
