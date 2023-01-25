import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const lightBG = '#E6E0DC'
const darkBG = '#151433'
const rightColor_1 = '#404ABF'
const rightColor_2 = '#8C33CC'
const leftColor_1 = '#CC3DAA'
const leftColor_2 = '#322BD9'

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

    #rightCircle {
        position: fixed;
        top: -60vh;
        right: -60vh;
        background: linear-gradient(232.06deg, ${rightColor_1} 29.56%, ${rightColor_2} 95.03%);
        filter: blur(125px);
        
        border-radius: 50%;
        width: 120vh;
        height: 120vh;
    }

    #leftCircle {
        position: fixed;
        bottom: -40vh;
        left: -40vh;
        background: linear-gradient(229deg, ${leftColor_1} 31.48%, ${leftColor_2} 74.63%);
        filter: blur(125px);
        
        border-radius: 50%;
        width: 80vh;
        height: 80vh;
    }

    @media screen and (min-width: 800px) {
        #rightCircle {
            top: -60vw;
            right: -60vw;
            width: 120vw;
            height: 120vw;
        }

        #leftCircle {
            bottom: -40vw;
            left: -40vw;
            width: 80vw;
            height: 80vw;
        }
    }



`