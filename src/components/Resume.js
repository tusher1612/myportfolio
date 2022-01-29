import {React,useEffect} from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import SmallTitle from '../components/SmallTitle';
import BusinessCenteIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../components/ResumeItem';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Resume() {
    const briefcase=<BusinessCenteIcon/>
    const school =<SchoolIcon/>
    useEffect(()=>{
        Aos.init({duration:2000});
       
           },[]);
    return (
          
      <ResumeStyled>
      <Title title={'resume'} span={'resume'}/>
       <InnerLayout>
        <div data-aos="fade-in" className="small-title">
        <SmallTitle icon={school} title={'Education'}/>
        </div>
        <div data-aos="fade-left" className="resume-content">
        <ResumeItem year={'2019-present'}  title={'Computer Science and Engineering'} subtitle={'Brac University'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
        <ResumeItem year={'2016-2018'}  title={'Higher Secondary Certificate'} subtitle={'Chitagong Engineering University School and College'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
          <div className="utility">
          <ResumeItem year={'2015-2016'}  title={'Secondary Certificate'} subtitle={'Chitagong Engineering University School and College'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
          </div>
        
        </div>
        <div data-aos="fade-up" className="small-title">
      
        <SmallTitle icon={briefcase} title={'Working Experience'}/>
        </div>
        <div data-aos="fade-in" className="resume-content">
        <ResumeItem year={'2020-2022'}  title={'Frelanced Many International Projects'} subtitle={'Upwork and Fiverr'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
        <ResumeItem year={'2021-2022'}  title={'Worked with Several APIs like Context,Rapid and Rest API'} subtitle={'Joma Tech'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
        <ResumeItem year={'2019-2020'}  title={'Worked On Many StartUp'} subtitle={'Dream IT Solution'} text={'I like to work hard and I am a tech enthusiastic.I like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiasticI like to work hard and I am a tech enthusiastic'}/>
        </div>
       </InnerLayout>
        
        </ResumeStyled>
       
      
    )
}

const ResumeStyled=styled.section`
.small-title{
    padding-bottom: 3rem;
}
.resume-content{
    border-left:3px solid var(--border-color); 
}
`;

export default Resume;
