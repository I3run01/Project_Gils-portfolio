import styled from "styled-components";

export const CapeStyled = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');


   position: relative;
   overflow-x: hidden;

   height: 100vh;

   #photoDiv {
      position: absolute;
      bottom: 100px;
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
      text-align: center;
      font-family: 'Dosis';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 46px;

      background-color: yellow;

      background: conic-gradient(from -6.57deg at 11.95% 190.66%, #404ABF 0deg, rgba(0, 0, 0, 0) 360deg, #000000 360deg);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      filter: drop-shadow();

   }

   @media screen and (min-width: 500px) {
      
      #photoDiv {
         width: 60%;
      }
      
   }

   @media screen and (min-width: 700px) {
      #photoDiv {
         right: 8%;
         width: 40%;
      }
   }

   @media screen and (min-width: 1000px) {
      #photoDiv {
         right: 10%;
         width: 30%;
      }
   }


`