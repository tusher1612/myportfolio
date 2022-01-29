import  Title  from '../components/Title';
import React from 'react'
import styled from 'styled-components';
 import {InnerLayout} from '../styles/Layouts';
import ReviewItem from './ReviewItem';
function ReviewSection() {
    return (
        
        <ReviewSectionStyled>
            <Title title={'Reviews'} span={'Reviews'}/>
            <InnerLayout>
            <div className="reviews">
            <ReviewItem name="Heather Bailey " text={'Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Tusher, he will guide you to the right direction. '}/>
            <ReviewItem name="Susanna Wei " text={'Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies '}/>
            
            </div>
            </InnerLayout>
        </ReviewSectionStyled>
      
    )
}
const ReviewSectionStyled= styled.section`
.reviews{
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:1.5rem;
width:100%;
@media screen and (max-width:650px){
    grid-template-columns:repeat(1,1fr);
}


}

`;
export default ReviewSection;
