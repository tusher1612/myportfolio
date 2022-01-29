import {React,useEffect,useState} from 'react'
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import PopupButton from '../components/PopupButton';
import ContactItem from '../components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form";


function ContactPage() {
    const { register,reset, handleSubmit,formState, trigger, formState: { errors } } = useForm();
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false );
    const sendEmail=(formdata)=>{
            emailjs.send('gmail', 'template_v9d5ohn', formdata, 'user_AEMcSZlQQZOlwJek0TPVn')
                .then((result) => {
            setIsSuccessfullySubmitted(true);
              console.log(result.text);  
         }, (error) => {
            console.log(error.text);
            });
            reset();
    }
    
    const phone=<PhoneIcon/>
    const email=<EmailIcon/>
    const location=<LocationOnIcon/>

        useEffect(()=>{
            Aos.init({duration:2000});
         },[]);

    
    return (
        <MainLayout>
        <ContactPageStyled>
            <Title title={'Contact'} span={'Contact'}/>
            <InnerLayout className='contact-section'>
            <div data-aos="fade-left" className="left-content">
            <div className="contact-title">
             <h4>Get In Touch </h4>
            </div>
             <form  className="form" onSubmit={handleSubmit(sendEmail)} >      
             <div className="form-field">             
             <label htmlFor="name" >Enter your name* </label>
             <input className={ `${errors.name && "invalid"}`} type="text" id='name' name="name"  {...register("name", {
                      required: true 
              })}/>
              {errors.name && (<small className='text-danger'>Please fill out this field.</small>)}
             </div>
             <div className="form-field">             
             <label htmlFor="email" >Enter your email* </label>
             <input className={ `${errors.email && "invalid"}`} type="email" id='email' name="email"  {...register("email", {
                required: true   
        })}    onKeyUp={()=>{ trigger("email");}}  />
        {errors.email && (<small className='text-danger'>Please fill out this field.</small>)}
             </div>
             <div className="form-field">             
             <label htmlFor="subject"  >Enter your subject* </label>
             <input className={ `${errors.subject && "invalid"}`} type="text" id='subject' name="subject"  {...register("subject", {
                required: true 
        })} />
        {errors.subject && (<small className='text-danger'>Please fill out this field.</small>)}
             </div>
             <div className="form-field">
              <label htmlFor="text-area" >Enter your Message*</label>
             <textarea className={ `${errors.message && "invalid"}`} name="message" id='textarea'  cols={"30"} rows={"10"}  {...register("message", {
                required: true
        })}></textarea>
        {errors.message && (<small className='text-danger'>Please fill out this field.</small>)}
             </div>
             <div className="form-field f-button">
              <PopupButton title={'Send Email'} type="submit"/>
              {isSuccessfullySubmitted && (
                <div className="success">Thank you for your submission!<div className='cls-btn'><button onClick={()=>setIsSuccessfullySubmitted(false)}>close</button></div></div>
              )}
             </div>
             
             </form>
            </div>
            <div data-aos="fade-right" className="right-content">
            <ContactItem url={"  https://wa.me/1821417230?text=I will%20help%20you to grow%20your%20business"} icon={phone} title={'Phone'} contact1={'+880-01821417230'} contact2={'+880-1893644202'}/>
            <ContactItem url={"mailto:mohammed.tuser.ahmed@gmail.com"} icon={email} title={'Email'} contact1={'mohammed.tuser.ahmed@gmail.com'} contact2={'tusher1612@gmail.com'}/>
            <ContactItem icon={location} title={'Address'} contact1={'Rangunia, Chittagong'} contact2={'Bangladesh'} 
              url={"https://www.google.com/maps/place/Rangunia+Upazila/@22.5776301,91.8757285,13z/data=!4m5!3m4!1s0x30ad33a5b42ea935:0xcdfee774a246f04d!8m2!3d22.4695344!4d92.0518061"}
            
            />
            </div>
            
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}
const ContactPageStyled=styled.section`
.contact-section {
    
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width:978px){
        grid-template-columns: repeat(1,1fr);
        .f-button{
            margin-bottom: 3rem;
        }
    }
    .right-content{
        display: grid;
       grid-template-columns: repeat(1,1fr);
       @media screen and (max-width:502px){
              width:fit-content;
        }
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size:1.8rem;
        }
    }
    .form {
        width: fit-content;
        @media screen and (max-width:502px){
              width:fit-content;
        }
        .form-field{
            margin-top: 2rem;
            position: relative;
            label{
            position: absolute;
            left: 20px;
            top:-19px;
            display: inline-block;
            background-color:var( --background-dark-color) ;
            padding: 0 .5rem;
            color: inherit;
            }
            input{
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding: 0 15px;
                width: fit-content;
                color: inherit;
            }
            .invalid {
                border:1px solid red;
            }
            .text-danger {
               
                color:red;
                font-size:1rem;
                @media screen and (max-width:390px){
                    position: absolute;
                    left: 1rem;
                    top: 3rem;
                }
              
            }
            textarea{
                background-color:transparent;
                border: 1px solid var(--border-color);
                outline: none;
                color: inherit;
                width: fit-content;
                padding: .8rem 1rem;
            }
            .success {
                position:absolute;
                color:green;
                width: 10rem;
                height: 8rem;
                top:-16rem;
                left:6rem;
                padding: 0.5rem;
                background-color: white;
                .cls-btn{
                    position: relative;
                    left:2rem;
                    top:-2rem;
                    button {
                        position:absolute;
                        left:1rem;
                        top:3rem;
                        cursor:pointer;
                    }
                }

            }
              
        }
       
    }
}

`;
export default ContactPage;
