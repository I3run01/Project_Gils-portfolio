import styled from "styled-components";

type props = {
    onHover:boolean
    theme: string
}

const darkThemeMenuColor = '#ffff'
const lightThemeMenuColor = '#000000'

export const IconRightMenuBarStyled = styled.div<props>`
    position: fixed;
    right: 9px;
    bottom: 12px;
    height: 50px;
    width: 50px;
    z-index: 30;
    cursor: pointer;

    .line01, .line02 {
        position: fixed;
        right: 12px;
        bottom: 35px;

        width: 40px;
        height: 3px;
        background-color: ${props => props.onHover ? 
        '#001D66' : 
        props.theme === 'dark' ? darkThemeMenuColor : lightThemeMenuColor};
        transition: all 0.5s ease-in-out;

        border: 1px solid ${props => props.theme == 'dark' ? 
        darkThemeMenuColor : 
        lightThemeMenuColor
        };
        
        border-radius: 10px;
        
    }

    .line02 {
        transform: rotate(90deg);
    }

    //animation
    .line01opened {
        width: 50px;
        transform: translateX(5px);
    }

    .line02opened {
        rotate: 90deg;
        opacity: 0;
    }

    
`