import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const FooterStyled = styled.div<props>`
    margin-top: 100px;
    min-height: 50px;

    box-sizing: border-box;
    background: linear-gradient(179.21deg, rgba(255, 253, 253, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */
    border-top: 3px solid ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

    display: flex;
    justify-content: space-around;

    #apresentation {
        display: flex;
        justify-content: center;
        align-items: center;

        #photo {
            margin-top: 5px;
            margin-right: 5px;
            width: 56px;

            img {
                width: 100%;
            }
        }

        #text {
            margin-top: 5px;
            padding: 5px;

            h2 {
                margin: 0px;
                font-family: 'Dosis';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;

                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
            }
    
            h1 {
                margin: 0px;
                font-family: 'Dosis';
                font-style: normal;
                font-weight:700;
                font-size: 24px;

                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
            }
        }

    }

    #socialMedias {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        #mediasTXT {
            p {
                margin: 0px;
                font-family: 'Dosis';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;

                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
            }
        }

        #allMedias {
            margin-top: 5px;
            display: flex;
            flex-direction: row;

            a {
                width: 20px;
                padding: 2px;

                :hover img {
                    filter: saturate(100%);
                }

                img {
                    width: 90%;
                    filter: saturate(0%) invert(${props => props.theme === 'dark' ? '1' : '0'});
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        
        #socialMedias {
            flex-direction: row;

            #mediasTXT {
                margin-right: 20px;
                
                p {
                    font-size: 24px;

                    ::after {
                        content: ' :';
                        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
                    }
                }
            }

            #allMedias {
                
                a {
                    width: 40px;

                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    

`