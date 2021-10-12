import React, {useEffect,useRef} from 'react'
import Chevron from './Chevron'
import style from '../styles/landingSection.module.css'
import {gsap} from 'gsap'

const LandingSection = () => {
    var bgImageRef = useRef()

    useEffect(() => {
        bgImageRef.current.onload = gsap.fromTo('.'+bgImageRef.current.className, { opacity:0} , {opacity:1,duration:3})

        var fadeIn = gsap.fromTo(`.${
            style.landingSection
        }`, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        })

        return() => {
            fadeIn.kill()
        }


    }, [])




    return (
        <section className={style.landingSection}>
            <div className={style.landingSectionBg}></div>  {/* LANDING SECTION BG*/}
            <div className={style.landingSectionImageBox}> {/* LANDING Section image box*/}
                <div className={style.blurred}></div>  {/* LANDING Section blurred*/}
                
                <img                        
                ref={bgImageRef}  
                src={'websiteimage.jpg'}
                alt="Cristian Hoza, Developer, Designer, Profile Picture, Image"
                loading="lazy"
                className={
                    style.landingSectionImage
                }/> {/* LANDING Section image*/}  
                <img                        
                ref={bgImageRef}  
                src={'websiteimage-small.jpg'}
                alt="Cristian Hoza, Developer, Designer, Profile Picture, Image"
                loading="lazy"
                className={
                    style.landingSectionImageSmall
                }/> {/* LANDING Section image Small*/}  

            </div>
            <div className={style.landingSectionText}> {/* LANDING section Text */}
                <p>hi there👋</p>
                <h1>i&apos;m cristian hoza</h1>
                <h1>full stack developer &#38; web designer</h1>
                <p>Young age, professionality, flexibility<br/>
                    &#38; vast range of growing Tech Skills.<br/>
                    All in One.<br/>

                    Based in Switzerland🇨🇭

                </p>

                <div className={style.landingSectionInviteToActionButton}>
                    don&apos;t press it!
                </div>

            </div>
            <div className={style.landingSectionInviteToAction}> {/*Landing Section Call To Action */}
                <Chevron class={
                    style.chevron
                }/>
                <div style={
                    {marginTop: '20px'}
                }>
                    don&apos;t scroll down!
                </div>
            </div>
        </section>
    )


}


export default LandingSection



