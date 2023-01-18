import styled from "styled-components";

type Props = {
    theme: string
}

export const RightMenuBarStyled = styled.div<Props>`
    .container {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 0px;
        z-index: 20;

        transition: all 0.5s ease-in-out;
        
        /* From https://css.glass */
        background: rgba(98, 99, 211, 0.14);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.5px);
        -webkit-backdrop-filter: blur(6.5px);

        .Icons {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 70px;
            height: 80%;

            

            a {
                margin: auto;
                transform: scale(80%);
                filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});

                :hover {
                    filter: brightness(100%)
                    saturate(${props => props.theme === 'dark' ? 50 : 20});
                }
            }
        }

        .topLine, .bottomLine {
            display: none;
            position: fixed;
            right: 31px;
            z-index: -1;
            width: 3px;
            background-color: #7B7A99;
        }
        .topLine {
            top: 0;
            height: calc(100vh - 76%);
        }
        .bottomLine {
            bottom: 0;
            height: calc(100vh - 76%);
        }
    }

    //Animation
    .opened {
        width: 70px;
    }

    @media screen and (min-width: 1000px) {
        .container {
            width: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .Icons {
                height: 60%;
            }

            .topLine, .bottomLine {
                display: block;
            }
        }

        #IconRightMenuBar {
            display: none;
        }

        
    }


`