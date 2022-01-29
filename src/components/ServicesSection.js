import  styled  from 'styled-components';
import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
            <Title title={'Services'} span={'services'}/>
             <div className="services">
             <ServiceCard image={design} title={'Web Design '} 
             paragraph={'I can turn any kind of Figma or Adobe XD  desing into  alive. '}/>
             <ServiceCard image={intelligence} title={'Artificial Intelligence'} 
             paragraph={'I like to build website with AI functionality like Alan AI'}/>
            
             
             <ServiceCard image={design} title={'Web Development'} 
             paragraph={'I can build any kind of Mern stack website with full fucntionality. I  have a good hand on wordpress website also'}/>
             </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}
const ServicesSectionStyled=styled.section`
.services {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:1.5rem;
    margin-top: 5rem;
    @media screen and (max-width:1000px){
            flex-direction:column ;
}
    @media screen and (max-width:950px){
        grid-template-columns: repeat(2,1fr);
}
    @media screen and (max-width:650px){
        grid-template-columns: repeat(1,1fr);
}
   
}
`;
export default ServicesSection;
