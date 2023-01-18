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
        height: 100vh;
        box-shadow: 1px 1px 1px black;
        width: 250px;
        transition: all 0.5s ease-in-out;

        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(255, 255, 255, 0.34);

        #AboutIcon, #workIcon, #themeIcon {

            img {
                margin-left: 20px;
                width: 40px;
            }
        } 


        #AboutIcon {
            height: 20%;

        }

        #workIcon {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;

        }

        #themeIcon {
            height: 20%;
        }
    }

    //animation
    .closed {
        width: 60px;
    }
`