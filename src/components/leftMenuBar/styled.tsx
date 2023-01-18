import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const widthMenu = '250px'
const fontColorDark = 'white'
const fontColorLight = 'black'




export const LeftMenuBarStyled = styled.div<props>`
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
        width: ${widthMenu};
        transition: all 0.5s ease-in-out;

        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(255, 255, 255, 0.34);

        #AboutIcon, #workIcon, #themeIcon {

            overflow: hidden;
            
            div {
                width: ${widthMenu};
                display: flex;
                justify-content: space-between;

                margin-bottom:20px;
                margin-top:20px;

                :hover {
                    cursor: pointer;

                    img {
                        filter: saturate(100%);
                    }  
                    
                    h2 {
                        color: #590099;
                    }
                }
                    
            }

            img {
                margin-left: 20px;
                width: 40px;
                filter: saturate(0) invert(${props => props.theme === 'dark' ? 1 : 0});
                transition: all 0.5s ease-in-out;


                
            }

            h2 {
                margin-right: 20px;
                font-family: 'dosis';
                font-size: 24px;
                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
                transition: all 0.5s ease-in-out;
            }
        } 


        #AboutIcon {
            height: 15%;

            

        }

        #workIcon {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;

        }

        #themeIcon {
            height: 15%;
            
        }
    }

    //animation
    .closed {
        width: 0px;
    }

    @media screen and (min-width: 1000px){

        //animation
        .closed {
            width: 80px;
        }
        
    }
`