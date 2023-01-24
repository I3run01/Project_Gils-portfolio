import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const AboutJobStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    margin-top: 80px;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #container {
        margin-top: 20px;
        padding: 20px;
        width: 100%;

        box-sizing: border-box;
        background: linear-gradient(179.21deg, rgba(255, 253, 253, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 20px;
        border: 3px solid ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

        h2 {
            font-family: 'Dosis';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;

            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
        }

        p {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;

            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
        }
    }

    

`