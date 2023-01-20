import styled from "styled-components";

const mobileMargin = '15px'
const tabletMargin = '50px'
const desktopMargin = '100px'
const maxMargin = '22%'

export const GlobalStyled = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;

`

export const MainStyled = styled.div`
    
    margin-left: ${mobileMargin};
    margin-right: ${mobileMargin};

    @media screen and (min-width: 500px) {
        margin-left: ${tabletMargin};
        margin-right: ${tabletMargin};
    }

    @media screen and (min-width: 800px) {
        margin-left: ${desktopMargin};
        margin-right: ${desktopMargin};
    }

    @media screen and (min-width: 1000px) {
        margin-left: ${maxMargin};
        margin-right: ${maxMargin};
    }

    
`