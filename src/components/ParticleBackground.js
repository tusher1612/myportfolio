import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const ParticleBackground = ()=> {

    return <ParticleStyled>
    
    <Particles  width='100%' height='100vh'
    options={
      {
          background:{
              color:"black",
          },
          fpsLimit:60,

          interactivity:{
              detectsOn:"canvas",
              events:{
               resize: true
              },
              onclick: {
          enable: true,
             mode: "push"
             },
          },
        
          particles:{
              color: {
                  value:"9fafca"
              },
              move: {
              enable:true,
              direction:"none",
              random: false,
            speed: 1,
            straight: false,

          },
              number:{
                 density:{
                      density:true,
                  area:800
                 },
                 limit:0,
                 value:300,
              },
              opacity: {
                  animation: {
                      enable:true,
                      minimumValue:0.05,
                      speed:0.5,
                      sync:false
                  },
                  random:{
                    enable:true,
                      minimumValue:0.05,
                  },
                  value:1
              },
              shape:{
                  type:"square",

              },
              size: {
                  random:{
                      enable:true,
                      minimumValue:1
                  },
                  value:7,
              }

            
          }
      }

    }

    />
    
    
    </ParticleStyled>
}
const ParticleStyled=styled.div`


`




export default ParticleBackground;
