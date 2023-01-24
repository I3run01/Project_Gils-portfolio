import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
    image: string
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const GallaryStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;
    padding-top: 120px;
    margin-top: 50px;
    margin-bottom: 20px;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #gallary {
        display: flex;
        flex-direction: column-reverse;

        #imageChoseContainer {
            margin-top: 20px;

            width: max-content;
            max-width: 100%;
            height: 40px;
            
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;

            cursor: pointer;

            
            

            .imageChose {            
                height: 100%;
                box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);

                img {
                    height: 100%;
                }

                filter: saturate(0);

                :hover {
                    filter: saturate(100%);
                }
            }
        }

        #image {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 55vh; 

                img {
                    width: 100%;

                    border: 3px solid #280A00;
                    border-radius: 20px;
                    box-shadow: 0px 4px 4px 0px #00000040;
                }
        }
    }

    @media screen and (min-width: 700px) {

        #gallary {
            margin-top: 100px;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 70vh;

            #imageChoseContainer {
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                height: min-content;
                min-width: 60px;
                width: min-content;
                padding: 0;

                border: 3px solid black;

                .imageChose {
                    width: 100%;
                    height: auto;
                    width: 60px;
                    background-color: #590099;

                    img {
                        width: 100%;
                        height: auto;
                    }
                }
            }

            #image {
                max-width: 80%;
                min-width: min-content;
                height: 100%;

                img {
                    max-height: 100%;
                    max-width: 100%;
                }


            }
        }

        
    }

    
`