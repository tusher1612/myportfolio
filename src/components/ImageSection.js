import {React,useEffect } from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import Aos from 'aos';
import 'aos/dist/aos.css';
function ImageSection() {
    useEffect(() => {
        Aos.init({duration:2000,offset:20});
        
    }, []);
    return (
        <ImageSectionStyled>
            <div data-aos="fade-left" className="left-content">
            <img src={resume} alt='resume image' />
            </div>
            <div data-aos="fade-right" className="right-content">
            <h4>I am <span> Tusher</span></h4>
            
            <p data-aos="fade-in" className="paragraph">
            I am a fast learner, enthusiastic and love to explore different technologies.
            I am bound to work for the welfare of your company
            </p>
            <div data-aos="fade-up"  className="about-info">
            <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
            </div>
            <div className="info">
            <p>:Mohammed Fackruddin Tusher</p>
            <p>:22</p>
            <p>:Bangladeshi</p>
            <p>:Bangla/English</p>
            <p>:Chittagong,Bangladesh</p>
            <p>:Freelance</p>
            </div>
            
            </div>
            <PrimaryButton  title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled=styled.div`
display: flex;
margin-top:4rem;
@media screen and (max-width:1000px){
 flex-direction:column ;
 .left-content{
     margin-bottom: 2rem;
 }
}

.left-content{
    width: 100%;
    img {
        width: 95%;
        height: 100%;
        object-fit: cover;
    }
}
.right-content {
    width: 100%;
    h4{
        font-size:2rem;
        color: var(--white-color);
        span {
            font-size:2rem;
            color: var(--primary-color);
        
        }

    }
    .paragraph{
        padding: 1rem 0;

    }
    .about-info {
        display: flex;
        padding-bottom: 1.4rem;

        .info-title{
            padding-right:3rem ;
            @media screen and (max-width:448px){
                padding-right:.2rem;
            }
            
            p{
                font-weight:600;
                
            }
        }
        .info-title, .info{
          p{
            padding: .32rem 0;
            
          }
          @media screen and (max-width:375px){
            p{
            padding: .1rem 0;
            
          }
          }
        }
    }
}

`;
export default ImageSection;
