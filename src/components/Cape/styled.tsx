import styled from "styled-components";

export const CapeStyled = styled.div`
   position: relative;
   
   width: 100vw;
   overflow-x: hidden;

   #photoDiv {
      margin-left: 15px;
      margin-right: 15px;

      img {
         width: 100%;

         border-radius: 40px;
         border: 2px solid black;

         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
   }

   #line {
         position: absolute;
         bottom: 50px;
         left: 0;
         z-index: -1;

         height: 4px;
         width: 100%;
         
         background: rgb(15,25,138);
         background: linear-gradient(90deg, rgba(15,25,138,1) 0%, rgba(207,108,186,1) 100%);
   }

   @media screen and (min-width: 500px) {
      
      #photoDiv {
         margin-left: 30%;
         width: 60%;
      }
      
   }

   @media screen and (min-width: 700px) {
      #photoDiv {
         margin-left: 50%;
         width: 40%;
      }
   }

   @media screen and (min-width: 1000px) {
      #photoDiv {
         margin-left: 60%;
         width: 30%;
      }
   }


`