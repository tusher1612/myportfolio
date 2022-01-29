import {React,useEffect} from 'react'
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProgressBar({title,width,text}) {
    useEffect(()=>{
        Aos.init({duration:2000});
       
           },[]);
    return (
        < ProgressBarStyled>
            <h6>{title}</h6>
            <div data-aos="fade-in" className="progress-bar">
            <p>{text}</p>
            <div  data-aos="fade-left" className="progress">
            <span style={{width:width}}> </span>
            </div>
            </div>
        </ ProgressBarStyled>
    )
}
const ProgressBarStyled=styled.div`
.progress-bar{
    display:flex;
    align-items:center;
    p{
        padding-right:1.1rem;
    }
    .progress {
        position:relative;
        width:100%;
        height:.4rem;
        background-color:var(--border-color);
        span{
            background-color:var(--primary-color);
            position:absolute;
            left:0;
            bottom:0;
            height:100%;
        }
    }
}

`;

export default ProgressBar;
