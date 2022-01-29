import {React,useEffect} from 'react'
import styled from 'styled-components';
import { InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import ProgressBar from './ProgressBar';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    useEffect(()=>{
        Aos.init({duration:2000});
       
           },[]);
    return (
        
        <SkillsStyled>
          <Title title={'My Skills'} span={'My Skills'}/>
          <InnerLayout>
          
          <div className="skills">
          <ProgressBar title={'HTML5'} width={'70%'} text={'70%'}/>
          <ProgressBar title={'CSS3'} width={'80%'} text={'80%'}/>
          <ProgressBar title={'JAVASCRIPT'} width={'75%'} text={'75%'}/>
          <ProgressBar title={'JAVA'} width={'60%'} text={'60%'}/>
          <ProgressBar title={'REACT JS'} width={'75%'} text={'75%'}/>
          <ProgressBar title={'WORDPRESS'} width={'85%'} text={'85%'}/>
          <ProgressBar title={'UX & UI'} width={'75%'} text={'75%'}/>
          </div>
          
          </InnerLayout>
          </SkillsStyled>
        
        
    )
}
const SkillsStyled=styled.section`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap:2rem;
    grid-row-gap:3rem;
    @media screen and (max-width:700px){
        grid-template-columns: repeat(1,1fr);
    }
}

`;
export default Skills;
