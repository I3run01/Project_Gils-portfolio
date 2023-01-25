import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
    rightColor_1: string
    rightColor_2: string
    leftColor_1: string
    leftColor_2: string
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

    #rightCircle {
        position: fixed;
        top: -60vh;
        right: -60vh;
        background: linear-gradient(232.06deg, ${props => props.rightColor_1} 29.56%, ${props => props.rightColor_2} 95.03%);
        filter: blur(125px);
        
        border-radius: 50%;
        width: 120vh;
        height: 120vh;
    }

    #leftCircle {
        position: fixed;
        bottom: -40vh;
        left: -40vh;
        background: linear-gradient(229deg, ${props => props.leftColor_1} 31.48%, ${props => props.leftColor_2} 74.63%);
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