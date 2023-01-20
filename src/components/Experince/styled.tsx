import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = 'white'
const fontColorLight = 'black'

export const ExperienceStyled = styled.div`
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
            width: 100%;
            height: 300px;

            box-sizing: border-box;
            background: linear-gradient(179.21deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
            box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(20px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 20px;

            .business {
                background-color: orange;
                display: flex;

                .photo {
                    width: 56px;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    
                }


            }
        }
    }
    
`