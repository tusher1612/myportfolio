import {React,useEffect} from 'react'
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ReviewItem({text ,name}) {
    useEffect(()=>{
 Aos.init({duration:2000});

    },[]);
    return (
        <ReviewItemStyled>
           <div data-aos="fade-up" className='reviewText'><p>{text}</p>
           <div className="setup">
           <div className='stars'>  <StarIcon/> 
           <StarIcon/> 
           <StarIcon/> 
           <StarIcon/> 
           <StarHalfIcon/>
           </div>
           <h2>{name} </h2>
           </div>
           </div> 
            
        </ReviewItemStyled>
    )
}
const ReviewItemStyled=styled.div`
.reviewText{
padding: 2rem 1rem;
background-color: var(--background-dark-grey);
border-left: 6px solid var(--border-color);
position: relative;
width: 100%;
&:hover{
    border-left: 6px solid var(--primary-color);
    transform: translateY(-4px);
    transition: all .5s ease-in-out;
    
}

&:hover::after {
    border-left: 6px solid var(--primary-color);
    transition: all .6s ease-in-out;
}
&::after{
    content: "";
    position: absolute;
    left: 2rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    
}
p{
    padding: .1rem 0;    
}
.setup {
    margin-top:.2rem;
    display: flex;
    justify-content: space-between;
    svg {
        color:var(--primary-color);
    }
}
}

`;
export default ReviewItem;
