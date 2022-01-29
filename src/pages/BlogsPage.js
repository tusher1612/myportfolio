import {React,useEffect} from 'react';
import styled from 'styled-components';
import blogs from '../data/blogs';
import Title from '../components/Title';
import {MainLayout ,InnerLayout} from '../styles/Layouts';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BlogsPage() {
    useEffect(()=>{
 Aos.init({duration:2000});

    },[]);
    return (
        <MainLayout>
        <BlogsPageStyled>
        <Title title={'Blogs'} span={'Blogs'}/>
         <InnerLayout className={'blog'}>
            {
                blogs.map((blog)=>{
                    
                    return <div data-aos="fade-down" key={blog.id} className='blog-item' >
                    <div className="image">
                    <img src={blog.image} />
                    </div>
                    <div className="title">
                    <a href={blog.link}>
                     {blog.title}
                    </a>
                    </div>
                    </div>

                })
            }
         </InnerLayout>
        </BlogsPageStyled>
        </MainLayout>
    )
}
const BlogsPageStyled= styled.div`
 .blog {
     display:grid;
     grid-template-columns:repeat(2, 1fr);
     grid-column-gap:2rem;
     grid-row-gap:3rem;
    @media screen and (max-width:770px){
        grid-template-columns:repeat(1, 1fr);
    }
     

    .blog-item{
        background-color:var(--background-dark-grey);
        padding:1rem 1rem;
       
    }
     .image {
         width:100%;
         padding-bottom:.5rem;
         overflow:hidden;

         img {
             width:100%;
             height:90%;
             object-fit:cover;
             &:hover {
                 cursor:pointer;
                 transform:rotate(2deg) scale(1.1);
                 transition:all .4s ease-in-out;
             }
         }
     }
     .title{
         a{
             font-size:1.6rem;
             padding:.5rem 0;
             color:var(--white-color);
             cursor:pointer;
             transition:all .4s ease-in-out;
             &:hover {
                 color:var(--primary-color);
             }
         }
     }
 }

`;

export default BlogsPage;
