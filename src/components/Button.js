   import React from 'react';
import styled from 'styled-components';

   
   function Button({filter,button}) {
       return (
           <ButtonsStyeld>
               {
                button.map((but,i)=>{
                    return <ButtonStyled key={i} onClick={()=>filter(but)}>
                     {but}
                    </ButtonStyled>
                })
               }
           </ButtonsStyeld>
       )
   }
   const ButtonStyled=styled.button`
 outline: none;
 border: none;
 background-color: var(--background-light-color-2);
 padding: .4rem 2rem;
 font-size:inherit;
 color: var(--white-color);
 transition: all .4s ease-in-out;
 cursor: pointer;
 margin-bottom: .6rem;
 &:active,&:focus{
     background-color: var(--primary-color);
 }
 &:hover{
     background-color: var(--primary-color);
 }

 &:not(:last-child){
     margin-right: .6rem;
 }
   `;
const ButtonsStyeld=styled.div`
 margin-bottom: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   width: 100%;
   margin:2.3rem auto;
`;
   export default Button;
   
