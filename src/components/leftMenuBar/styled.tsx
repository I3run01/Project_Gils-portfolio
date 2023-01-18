import styled from "styled-components";

export const LeftMenuBarStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    #burguerMenu {
        transform: scale(80%);
    }

    .container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #7199FF;
        height: 100vh;
        box-shadow: 1px 1px 1px black;
        width: 250px;
        transition: all 0.5s ease-in-out;

        a {
            font-family: 'Dosis', sans-serif;
            font-size: 32px;
            color: #ffff;
            padding-bottom: 60px;
            margin-left: 10px;
            white-space: nowrap;
            :hover {
                color: #001D66;
            }
            overflow-x: hidden;
            
            :hover {
                cursor: pointer;
            }
        } 
    }

    //animation
    .closed {
        width: 0px;
    }
`