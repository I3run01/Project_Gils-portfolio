import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const WorksTypesStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    padding-top: 100px;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #container {
        display: flex;
        flex-direction: column;

        #image {
            width: 100%;
            align-self: center;

            img {
                width: 100%;
                border: 3px solid #280A00;
                border-radius: 40px;

                box-shadow: 0px 4px 4px 0px #00000040;
            }
        }

        #text {

            margin-top: 20px;
            box-sizing: border-box;

            background: linear-gradient(93.49deg, rgba(177, 175, 175, 0.25) 0%, rgba(177, 175, 175, 0.15) 102.46%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 20px;

            padding: 20px;
            text-align: center;

            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
            
            z-index: -1;
            border: 3px solid ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

            #textTitle {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                background: linear-gradient(179.21deg, rgba(157, 155, 155, 0.1) 0%, rgba(85, 85, 85, 0.5) 100%);
                box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(23.1405px);
                border: 3px solid black;
                border-radius: 40px;

                padding: 5px;

                #symble {
                    width: 56px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 5px;


                img {
                    width: 100%;
                }
                }

                #nameOfwork {
                    padding-left: 20px;

                    font-family: 'Dosis';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;

                    color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
                }
            }
        }


    }

    @media screen and (min-width: 700px) {
        #container {
            flex-direction: row;
            align-items: center;

            #image {
                width: 30%;
                margin-right: -10px;
            }

            #text {
                width: 65%;

                #textTitle {
                    min-width: 60%;
                    max-width: min-content;
                }
            }
        }
    }

`