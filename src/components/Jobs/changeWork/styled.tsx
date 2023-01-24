import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'
const lightPurpleColor = '#590099'
const darkPurpleColor = '#CFBDDB'

export const ChangeWorkStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    #showWork {
        z-index: 1;
        position: fixed;
        bottom: 40px;
        left: 5px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        background: linear-gradient(179.21deg, rgba(157, 155, 155, 0.1) 0%, rgba(85, 85, 85, 0.5) 100%);
        box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(23.1405px);
        border: 3px solid black;
        border-radius: 20px;

        padding: 2px;

        #symble {
            width: 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 5px;


            img {
                width: 100%;
            }
        }

        #nameOfwork {
            padding-left: 10px;
            padding-right: 30px;

            font-family: 'Dosis';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
            
            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
        }
    }

    #changeWork {
        position: fixed;
        bottom: 0px;
        left: 10px;

        display: flex;
        justify-content: space-between;
        width: 120px;

        .divFather {
            padding: 15px;
            cursor: pointer; 

            :hover div {
                    background-color: ${props => props.theme === 'dark' ? darkPurpleColor : lightPurpleColor};
            }

            div {
                height: 12px;
                width: 12px;
                border-radius: 50%;
    
                background-color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
   
            }
        }

    }

    @media screen and (min-width: 1000px) {
        #showWork {
            left: 90px;
            border-radius: 40px;
            padding: 5px;

            #symble {
                width: 56px;
            }
        }

        #nameOfwork {
            font-size: 24px;
        }

        #changeWork {
            transform: translateX(50%);
            bottom: 10px;
            left: 50%;

            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: .5px solid rgba(255, 255, 255, 0.1);
            border-radius: 80px;

            div {
                height: 15px;
                width: 15px; 
            }


        }
    }

    
`