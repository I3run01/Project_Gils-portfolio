import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = 'white'
const fontColorLight = 'black'

export const ABoutStyled = styled.div<props>`
    height: 100vh;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #container {
        display: flex;
        flex-direction: column;

        #image {
            width: 100%;

            img {
                width: 100%;
                border: 5px solid #280A00;
                border-radius: 70px;

                box-shadow: 0px 4px 4px 0px #00000040;
            }
        }

        #text {

            margin-top: 20px;
            box-sizing: border-box;

            background: linear-gradient(93.49deg, rgba(177, 175, 175, 0.4) 0%, rgba(177, 175, 175, 0.1) 102.46%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(20px);
            border-radius: 20px;

            padding: 20px;
            text-align: center;

            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

            z-index: -1;
        }


    }

    @media screen and (min-width: 700px) {
        #container {
            flex-direction: row;
            align-items: center;

            #image {
                width: 35%;
            }

            #text {
                width: 65%;
            }
        }
    }
    
`