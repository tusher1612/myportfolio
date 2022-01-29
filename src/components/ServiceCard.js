import {React,useEffect} from 'react'
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
function ServiceCard({image, title, paragraph}) {
    useEffect(()=>{
       Aos.init({duration:2000});   
    },[]);

    return (
        <ServiceCardStyled>
            <div data-aos="fade-up" className="container">
            <img src={image}/>
            <h4>{title}</h4>
            <p>{paragraph}</p>
            
            </div>
        </ServiceCardStyled>
    )
}
const ServiceCardStyled=styled.div`
background-color: var(--background-dark-grey);
border-left: 1px solid var(--border-color);
border-top: 8px solid var(--border-color);
border-right: 1px solid var(--border-color);
border-bottom: 1px solid var(--border-color);

&:hover{
    border-top: 8px solid var(--primary-color); 
    transition: all .4s ease-in-out;
    transform: translateY(3px);
    
}

.container{
    padding: 1.2rem;
    h4{
        color: var(--white-color);
        font-size:1.6rem;
        padding: 1rem 0;
        position: relative;
        
        &::after{
            content: "";
            width: 4rem;
            background-color: var(--border-color);
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 10px;
        }
    }
    p{
        padding: .5rem 0;
    }
}
`;

export default ServiceCard;
