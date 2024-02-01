import React from 'react'
import {styles} from './PopUp.css'

export const PopUp = ({title, children, isVisible}) => {
    function closeWindow () {
        isVisible = false;
    }
  return (
    <div className='pop-up'>
        <div className='pop-up__header'>
            <h2 className='pop-up__title'>{title}</h2>
            <div className='pop-up__close-btn' onClick={closeWindow}></div>
        </div>
        <div className='pop-up__content'>
            {children}
        </div>
    </div>
  )
}
