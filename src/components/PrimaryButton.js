import {React,useEffect} from 'react'
import  styled  from 'styled-components';
import resume from '../data/resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';

function PrimaryButton({title}) {
    useEffect(() => {
     Aos.init({duration:2000,offset:50});
     
 }, []);
    return (
        <PrimaryButtonStyled>
        <a data-aos="fade-in" className='buttonnew' href={resume} download> {title} </a>
          
        </PrimaryButtonStyled>
    )
}
const PrimaryButtonStyled=styled.a`
.buttonnew{
background-color: var( --primary-color);
padding: 1rem 2.5rem;
color: white;
cursor: pointer;
display: inline-block;
font-size: inherit;
text-transform:uppercase;
position: relative;
transition: all .4s ease-in-out;
&::after{
    content:"";
    position: absolute;
    width: 0;
    height: .2rem;
    background-color:var(--white-color);
    left: 0;
    bottom: 0;
    transition: all .4s ease-in-out;
    opacity: 0.7;
}
&:hover::after {
    width: 100%;
    background-color: var(--white-color);  
}
}
`;
export default PrimaryButton;
