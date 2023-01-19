import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const lightBG = '#E6E0DC'
const darkBG = '#151433'

export const BackgroundStyled = styled.div<props>`
    position: fixed;
    left: 0;
    top: 0;

    z-index: -2;

    height: 100vh;
    width: 100vw;
    overflow-x: hidden;

    background-color: ${props => props.theme === 'dark' ? darkBG : lightBG};

    transition: all  0.5s ease-in-out;

    img {
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;

        width: 100vw;
        height: 100vh;
        
        overflow: hidden;
    }

`