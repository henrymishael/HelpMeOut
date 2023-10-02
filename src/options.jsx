import React from 'react'
import { render } from "react-dom"

import Button from './pages/assets/button.jsx'
import image1 from './pages/images/image1.png'
import image2 from './pages/images/image2.png'
import image3 from './pages/images/image3.png'
import light from './pages/images/gridlight.svg'
import dark from './pages/images/griddark.svg'
import vid from './pages/images/video1.png'
import logo from './pages/images/default.png'
import logo2 from './pages/images/light.png'
import loader from './pages/images/loader.svg'
import { BsRecordCircleFill} from "react-icons/bs";
import { BsSend} from "react-icons/bs";
import { LuRefreshCw} from "react-icons/lu";


export default function Home() {

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
        )}
        
    const Header = () => {
        return (
          <div className='bg-white px-[100px] flex flex-row items-center   h-[87px] border-b-[1px] justify-between border-solid border-gray-200 '>
              <div>
                  <Logo variant='dark'/>
              </div>
              <div className='font2 flex flex-row text-[16px] gap-[39px] font-medium'>
                  <p>Features</p>
                  <p>How It Works</p>
              </div>
              <div className='cursor-pointer font1 text-[18px] font-semibold text-[#120b48]'>
               
                  <p>Get Started</p>
                
              </div>
          </div>
        )
      }

    const Footer = ()=> {

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
        </div>)}
      
    
  return (
    <div className='h-[100vh]'>
      <header className=' font2'>
        <Header/>
      </header>
      <main className='    min-h-[100vh] flex flex-col items-center justify-center gap-[56px] '>
        <section className='bg-white px-[100px] pt-[165px] pb-[162px]  flex flex-row w-[100%]   justify-center items-center gap-[56px]  '>
          <article className='flex flex-col  gap-12 w-[48%]'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-[64px] font-bold font1 leading-[100%]'>Show Them Don't Just Tell</h2>
              <p className='text-[20px] leading-[28px] font-normal text-[#000000] opacity-75'>Help your friends and loved ones by creating and sending videos on how to get things done on a website</p>
            </div>
            <Button
              variant='primary'
              text='install HelpMeOut'
            />
          </article>
          <figure className=' relative z-[5] grid grid-cols-2 gap-5'>
            
              <img className='z-[2] absolute -left-14 -bottom-20 ' src={light} alt='vector'  width='330' height='313'/>
              <img className='z-[2] absolute -right-12 -top-14'  src={dark} alt='vector'  width='330' height='313'/>
            
            <div className='relative z-[5]  ' >
              <img className='w-full rounded-lg' src={image1} alt='image1' width='311' height='214'/>
            </div>
            <div className='relative z-[5] row-span-2 rounded-lg' >
              <img className='bg-black w-full rounded-lg' src={image3} alt='image3' width='305' height='448'/>
            </div>
            <div className='relative z-[5]  rounded-lg'>
              <img className='w-full rounded-lg'src={image2} alt='image2' width='311' height='214'/>
            </div>
          </figure>
        </section>
        {/* <--second--section--> */}
        <section className='bg-white flex flex-col   pt-16 pb-20 w-[100%] px-[100px]  '>
          <div className='text-center' >
            <h2 className='text-[40px] font-bold font1 '>Features</h2>
            <p className='text-[20px] font-normal font2 opacity-75'>Key Highlights of Our Extension</p>
          </div>
          <div className='flex flex-row mt-16  justify-center  items-center w- '>
            <article className='flex flex-col gap-12 w-[548px] h-[402px] justify-center items-center'>
              <div className='w-[100%] flex flex-row gap-4'>
                <span className='rounded-[100px] w-12 h-12 bg-[#120b48] flex items-center justify-center text-white text-[32px]'>
                  <BsRecordCircleFill/>
                </span>
                <span className='flex flex-col gap-3 '>
                  <h2 className='text-[28px]  font-semibold'>Simple Screen Recording</h2>
                  <p className='text-[20px] font2 opacity-75'>Effortless screen recording  for everyone. <br /> Record  with ease, no tech expertise required.</p>
                </span>
              </div>
              <div className='flex flex-row gap-4 w-[100%]'>
                <span className='rounded-[100px] w-12 h-12 bg-[#120b48] flex items-center justify-center text-white text-[26px]'>
                  <BsSend/>
                </span>
                <span className='flex flex-col gap-3'>
                  <h2 className='text-[28px]  font-semibold'>Easy-to-Share URL</h2>
                  <p className='text-[20px] font2 opacity-75'>Share your recordings instantly with a single <br /> link.  No attachments, no downloads.</p>
                </span>
              </div>
              <div className=' flex flex-row gap-4'>
                <span className='rounded-[100px] w-[48px] h-[48px] bg-[#120b48] flex items-center justify-center text-white text-[32px]'>
                  <LuRefreshCw/>
                </span>
                <span className='flex flex-col gap-3'>
                  <h2 className='text-[28px]  font-semibold'>Revisit Recordings</h2>
                  <p className='text-[20px] font2 opacity-75'>Access and review your past content effortlessly. <br /> Your recordings, always at your fingertips.</p>
                </span>
              </div>
              
            </article>
            <figure className='w-[536px] h-[454px]'>
                <img className='aspect-w-1 aspect-h-1 ' src={vid} alt='vid' width='536' height='454' />
            </figure>
          </div>
        </section>
        {/* <--section 3--> */}
        <section className='bg-white flex flex-col   pt-16 pb-20 w-[100%] px-[100px] gap-[59px]  '>
          <div className='text-center' >
            <h2 className='text-[40px] font-bold font1 '>How it works</h2>
          </div>
          <article className='flex flex-row items-center justify-center gap-14
          '>
            <div className='flex flex-col items-center justify-center w-[358px] gap-7'>
              <span className='rounded-[100px] w-[68px] h-[68px] bg-[#120b48] flex items-center justify-center text-white text-[32px] font-bold'>
                  <h2>1</h2>
              </span>
              <span className='text-center flex flex-col gap-4 mt-1'>
                <h2 className='text-[28px]  font-semibold'>Record Screen</h2>
                <p className='text-[20px] opacity-75 font2'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
              </span>
              <span>
                <img src={loader} alt='load'/>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center w-[358px] gap-7'>
              <span className='rounded-[100px] w-[68px] h-[68px] bg-[#120b48] flex items-center justify-center text-white text-[32px] font-bold'>
                  <h2>2</h2>
              </span>
              <span className='text-center flex flex-col gap-4 mt-1'>
                <h2 className='text-[28px]  font-semibold'>Share Your Recording</h2>
                <p className='text-[20px] opacity-75 font2'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
              </span>
              <span>
                <img src={loader} alt='load'/>
              </span>
            </div>
            <div className='flex flex-col items-center justify-center w-[358px] gap-7'>
              <span className='rounded-[100px] w-[68px] h-[68px] bg-[#120b48] flex items-center justify-center text-white text-[32px] font-bold'>
                  <h2>3</h2>
              </span>
              <span className='text-center flex flex-col gap-4 mt-1'>
                <h2 className='text-[28px]  font-semibold'>Learn Effortlessly</h2>
                <p className='text-[20px] opacity-75 font2'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
              </span>
              <span>
                <img src={loader} alt='load'/>
              </span>
            </div>
          </article>
        </section>
        <footer className='w-[100%]'>
          <Footer/>
        </footer>
      </main>
    </div>

  )
}

render(<Home/> , document.getElementById("react-target1"))
