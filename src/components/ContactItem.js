import React from 'react';
import styled from 'styled-components';


function ContactItem({icon,title,contact1,contact2,url}) {
    return (
        <ContactItemStyled>
            <div className="left-content" onClick={()=>{window.location.href=url}} ><a href={url}>{icon}</a></div>
            <div className="right-content">
             <h6>{title}</h6>
             <p>{contact1}</p>
             <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
}
const ContactItemStyled=styled.div`
padding: 1.5rem 2rem;
background-color: var( --background-dark-grey);
display: flex;
align-items: center;
@media screen and (max-width:390px){
    padding:1rem 1rem;
}
@media screen and (max-width:420px){
    padding:1rem 1rem;
}
&:not(:last-child){
    margin-bottom: 2rem;
}

.left-content{
    width:fit-content;
    cursor: pointer;
    padding:1rem ;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    @media screen and (max-width:390px){
        margin-right: .7rem;
        padding: 1rem 1rem;
    }
    &:hover {
        border: 1px solid var(--primary-color);
        transition: all .5s ease-in-out;
        svg{
            color:var(--primary-color);
          transition: all .4s ease-in-out;
          transform: rotate(20deg);
        }
    }
    svg{
      font-size: 2.3rem;   
      }
    
    
}
.right-content{
    width:fit-content;
  
    h6{  
          color:var(--white-color);
          font-size:1.2rem;
          padding-bottom: .6rem;
    
    }
    p{
        padding: .1rem 0;
        @media screen and (max-width:390px){
        
        padding: .1rem .1rem;
    }
    }

}
`;

export default ContactItem;
