import {React,useEffect} from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts' ;
import ParticleBackground from '../components/ParticleBackground';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ServiceCard2 from '../components/ServiceCard2';



function HomePage() {
  useEffect(()=>{
 Aos.init({duration:2000});

    },[]);
    return (
      <HomePageStyled>
      <div className="p-particles-js">
        <ParticleBackground/>
     </div>
     <div className="typography">
      <h1 data-aos="fade-left">Hi I'm<span data-aos="fade-right" data-aos-delay="10" > Tusher </span></h1>
      <p data-aos="fade-in"> I am a fast learner, enthusiastic and love to explore different technologies.
             I am bound to work for the welfare of your company</p>
       <div className="icons">
         <a href='https://www.facebook.com/tusher.ahmed.16547' className="icon i-facebook">
         <FacebookIcon/>
         </a>
         <a  href='https://github.com/tusher1612' className="icon i-github">
           <GitHubIcon/>
         </a>
         <a  href='https://www.linkedin.com/feed/' className="icon i-linkdn">
         <LinkedInIcon/>
         </a>
       </div>
       
     <div className="projects">
     <ServiceCard2  duration="8" number= '9' prefix="0"  title={"Project Completed"}/>
     <ServiceCard2 duration="7" number= '5' prefix="0" title={"Pending Projects"}/>
     <ServiceCard2 duration="5" number= '7' prefix='0' title={"Happy Clients"}/>
     </div> 

     </div>
     
      
      </HomePageStyled>
          
        
    )
}
const HomePageStyled=styled.header`
width: 100%;
height: 100vh;
position: relative;
.p-particles-js{
position: absolute;
top: 0;
z-index:-20 !important;
overflow: hidden;

}
.typography{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align:center;
    width:80%;
    @media screen and (max-width:360px){
      width:90%;
    }
    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
          font-size:1.2rem;
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin:.5rem;
            }
           
            }
            .i-github{
                &:hover {
                border: 2px solid #5F4687;
                color: #5F4687;
                
            }
        }
    }
}
.projects {
    position:absolute;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3,1fr);
    grid-gap:1.2rem;
    margin-top: 1.5rem;
    margin-left:6rem;
    @media screen and (max-width:1000px){
            flex-direction:column ;
            margin-left:0;
}
    @media screen and (max-width:950px){
        grid-template-columns: repeat(2,1fr);
        margin-left:0;
}
    @media screen and (max-width:650px){
        grid-template-columns: repeat(1,1fr);
        margin-left:0;
}
   
}
`;
export default HomePage;
