import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import ReviewSection from '../components/ReviewSection';
function AboutPage() {
    return (
        <MainLayout>
        <AboutStyled>
           <Title title={'About Me'} span={'About Me'}/>
           <ImageSection/>
           <ServicesSection/>
           <ReviewSection/>
        </AboutStyled>
        </MainLayout>
    )
}
const AboutStyled=styled.section`

`;
export default AboutPage ;
