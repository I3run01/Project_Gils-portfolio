import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = 'white'
const fontColorLight = 'black'

export const ExperienceStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #container {
        width: 100%;

        .subcontainer {
            margin-top: 20px;
            padding-top: 20px;
            width: 100%;
            height: 300px;

            box-sizing: border-box;
            background: linear-gradient(179.21deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
            box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(20px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 20px;

            

            .business {
                display: flex;
                justify-content: center;
                width: 95%;
                margin: auto;

                background: linear-gradient(179.21deg, rgba(157, 155, 155, 0.4) 0%, rgba(85, 85, 85, 0.1) 100%);
                box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(23.1405px);

                border: 3px solid black;

                border-radius: 40px;
                
                .photo {
                    width: 56px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 10px;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    
                    h2 {
                        margin: 0;
                        font-family: 'Dosis';
                        font-style: normal;
                        font-weight: 700;
                        font-size: px;
                        line-height: 30px;

                        text-align: center;

                        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
                    }

                    h3 {
                        margin: 0;
                        font-family: 'Dosis';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        display: flex;
                        align-items: center;

                        text-align: center;

                        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight}
                    }
                }


            }
        }
    }
    
`