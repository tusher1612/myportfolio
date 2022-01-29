import {React,useEffect,useState} from 'react'
import  styled  from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

function PopupButton({title,type,props}) {
    const [buttonPopup,setButtonPopup]=useState(false);
    useEffect(() => {
     Aos.init({duration:2000,offset:50});
     
 }, []);
    return (
        <PopupButtonStyled>
        
        <button data-aos="fade-in" className='buttonnew' type={type} >{title} </button>
          
        </PopupButtonStyled>
    )
}
const PopupButtonStyled=styled.a`
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
export default PopupButton;
