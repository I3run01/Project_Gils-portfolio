import styled from "styled-components";

const mobileMargin = '15px'
const tabletMargin = '50px'
const desktopMargin = '100px'
const maxWidth = '900px'

export const GlobalStyled = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
`

export const MainStyled = styled.div`
    
    margin-left: ${mobileMargin};
    margin-right: ${mobileMargin};
    max-width: ${maxWidth};
`