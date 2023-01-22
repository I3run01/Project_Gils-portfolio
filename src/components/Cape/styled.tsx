import styled from "styled-components";

type props = {
   theme: 'dark' | 'light'
}

const fontDarkFont = '#d2d2d2'
const fontLightFont = 'black'

export const CapeStyled = styled.div<props>`
   @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');


   position: relative;
   overflow-x: hidden;

   height: 100vh;

   #photoDiv {
      position: absolute;
      bottom: 150px;
      right: 5%;

      width: 90%;

      img {
         width: 100%;

         border-radius: 40px;
         border: 2px solid black;

         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
   }

   #line {
         position: absolute;
         bottom: 200px;
         left: 0;
         z-index: -1;

         height: 4px;
         width: 100%;
         
         background: rgb(15,25,138);
         background: linear-gradient(90deg, rgba(15,25,138,1) 0%, rgba(207,108,186,1) 100%);
   }

   h2 {
      position: absolute;
      bottom: 70px;
      left: 5%;

      text-align: center;
      font-family: 'Dosis';
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 46px;

      filter: drop-shadow(3px 3px 4px #000000);

      
      // CSS
      color: ${props => props.theme === 'dark' ? '#0F198A' : '#404ABF'};

      background-image: -webkit-linear-gradient(${props => props.theme === 'dark' 
         ? '135deg, #404ABF 0%,#8F8E8E 100%' 
         : '135deg, #0F198A 0%,#151433 100%'
      });
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      transition: all 0.5s ease-in-out;

   }

   h3 {
      position: absolute;
      bottom: 50px;
      left: 5%;

      font-family: 'Dosis';
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 30px;

      color: ${props => props.theme === 'dark' ? fontDarkFont : fontLightFont};

      transition: all 0.5s ease-in-out;
   }

   @media screen and (min-width: 500px) {
   
      #photoDiv {
         bottom: 100px;
         width: 60%;
      }

      h2 {
         left: 2%;
         bottom: 220px;
      }

      h3 {
         left: 2%;
         bottom: 200px;
      }
      
   }

   @media screen and (min-width: 700px) {
      #photoDiv {
         right: 8%;
         width: 40%;
      }

      h2 {
         left: 10%;
      }

      h3 {
         left: 10%;
      }

   }

   @media screen and (min-width: 1000px) {
      #photoDiv {
         right: 10%;
         width: 30%;
      }

      h2 {
         font-size: 48px;
      }

      h3 {
         font-size: 24px;
      }
   }


`