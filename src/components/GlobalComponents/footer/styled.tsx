import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const FooterStyled = styled.div<props>`
    min-height: 50px;
    width: max-content;

    box-sizing: border-box;
    background: linear-gradient(179.21deg, rgba(255, 253, 253, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
    border: 3px solid ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

`