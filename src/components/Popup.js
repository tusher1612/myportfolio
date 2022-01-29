import React from 'react';
import styled from 'styled-components';



function Popup(props) {
  return (props.trigger)?(
   <PopupStyled >
     <div className='popup-inner'>
      <button className='close-btn' onClick={()=> props.setTrigger(false)}>close</button>
      {props.children}
     </div>
  </PopupStyled>
  ):"";
}

const PopupStyled=styled.div`

    position: absolute;
    top:-150px;
    left:43px;
    width: 72%;
    height: 193%;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:50;
    .popup-inner {
        position: relative;
        padding: 42px;
        max-width:fit-content;
        .close-btn {
            position: absolute;
            top:16px;
            right: 16px;
        }
    }


`;
export default Popup;
