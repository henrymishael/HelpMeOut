import React from 'react'
import logo from '../images/default.png'
import logo2 from '../images/light.png'


const Logo = ({variant}) => {

  let style;
  let image;

  switch(variant){
    case 'dark':
      style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-[#100a42]'
      image = logo;
      break;
    case 'light':
      style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-white'
      image = logo2;
      break;
    default:
      return null;
  }

  return (
 
    <div variant = {variant} className={`${style}`}>
        <img src={image} width='40' height='40' alt='logo'/>
        <h2 className=''>HelpMeOut</h2>
    </div>
  )
  
}
export default Logo
