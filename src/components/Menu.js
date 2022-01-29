import {React,useEffect} from 'react'
import styled from 'styled-components';
import { GitHub,Pinterest } from '@material-ui/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Menu({menuItem}) {
    useEffect(()=>{
        Aos.init({duration:2000});
       
           },[]);

    return (
        <MenuStyled>
            {
                menuItem.map((item)=> {
                 return <div className="grid-item" key={item.id}>
                       <div data-aos="fade-up" className="portfolio-content">
                       <div className="portfolio-image">
                        <img src={item.image}/>
                        <ul>
                        <li>  <a href={item.link1}>
                        <GitHub/>
                        </a> 
                         </li>
                        <li>  <a href={item.link2}></a> 
                        <Pinterest/>
                        </li>
                        
                        </ul>
                       </div>
                       <h6>{item.title}</h6>
                       <p>{item.text}</p>
                       </div>
                 
                 </div>

                })
            }
        </MenuStyled>
    )
}
const MenuStyled=styled.div`
     display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1,1fr);
    }
.grid-item{
    .portfolio-content{
        display: block;
        position: relative;
        overflow: hidden;
        h6{
            font-size:1.5rem;
        }
        img{
            width: 100%;
            height: 30vh;
            object-fit:cover;
        }
        ul{
            position:absolute;
            transform: translateY(-600px);
            transition: all .4s ease-in-out;
            left:50%;
            top:40%;
            opacity: 0;
            li{
                display: flex;
            align-items: center;
            justify-content: center;
            padding:1rem;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            margin:0 .5rem;
            background-color:var(--border-color);
            transition:all .4s ease-in-out;
            &:hover{
                background-color: var(--primary-color);
            }
            li:hover{
                svg{
                    background-color: var(--white-color);
                    transition:all .4s ease-in-out;
                }
            }
            a{
                display: flex;
            align-items: center;
            justify-content: center;
            }
            }
            

        }
       .portfolio-image{
           &:before{
               content: "";
               position: absolute;
               left: 2%;
               top:4%;
             height: 0;
             width:0;
             transition: all .4s ease-in-out;
           }
           
       }
    .portfolio-image:hover{
        ul {
            transform: translateY(0);
            transform:translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            transition:all .4s ease-in-out;
            opacity: 1;
         
            li{              
            transition:all .4s ease-in-out;
            &:hover{
                background-color: var(--primary-color);
            }
            li:hover{
                svg{
                    background-color: var(--white-color);
                    transition:all .4s ease-in-out;
                }
            }
            a{
                display: flex;
            align-items: center;
            justify-content: center;
            }
            }
            svg{
                font-size:2rem;
            }
        }
        &:before{
               content: "";
               position: absolute;
               left: 2%;
               top:4%;
               height:calc(100% - 32%);
               width: calc(100% - 4%);
               background-color: white;
               opacity: 0.9;
               transform-origin:left;
               transition: all .4s ease-in-out;
           }
    }
    }
}
`;
export default Menu;
