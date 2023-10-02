import React from 'react'
import logo from '../images/default.png'
import logo2 from '../images/light.png'


const Footer = ()=> {

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
  return (
    <div className='px-[100px] w-[100%] h-[347px] text-white bg-[#120B48] flex flex-row items-center gap-32'>
        <span>
            <Logo variant='light'/>
        </span>
        <div className='flex flex-row items-center justify-around list-none w-[100%]'>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6'>
                <h3 className='font1 text-[16px] font-semibold mb-[2px] '>Menu</h3>
                <li>Home</li>
                <li>Converter</li>
                <li>How it Works</li>
            </span>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6'>
                <h3 className='font1 text-[16px] font-semibold mb-[2px] '>About us</h3>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy</li>
            </span>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6' >
                <h3 className='font1 text-[16px] font-semibold mb-[2px]  '>Screen Record</h3>
                <li>Browser Window</li>
                <li>Desktop</li>
                <li>Application</li>
            </span>
        </div>
    </div>
  )
}
export default Footer
