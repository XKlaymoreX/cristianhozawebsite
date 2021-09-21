import React from 'react'
import Chevron from './Chevron'
import style from '../styles/landingSection.module.css'



const LandingSection = ({res}) => {
    console.log(res)
    return (
        <div className={
            style.landingSection
        }>
            <div className={
                style.landingSectionBg
            }></div>
            <div className={
                style.landingSectionImageBox
            }>
                {/* <div className="landingSectionImage">
                    <div className="blurred"></div>
                </div>*/}
                <div className={
                    style.blurred
                }></div>
                <img src={'./websiteimage.png'} alt="MyImage"
                    className={
                        style.landingSectionImage
                    }/>
            </div>
            <div className={
                style.landingSectionText
            }>
                <p>hi there👋</p>
                <h1>i&apos;m cristian hoza</h1>
                <h1>full stack developer &#38; web designer</h1>
                <p>Young age, professionality, flexibility<br/>
                    &#38; vast range of growing Tech Skills.<br/>
                    All in One.<br/><br/>

                    Based in Switzerland🇨🇭

                </p>
            </div>
            <div className={style.landingSectionInviteToAction}>
                <Chevron class={style.chevron}/>
                <div style={
                    {marginTop: '20px'}
                }>
                    don&apos;t scroll down!
                </div>
            </div>
        </div>
    )
}

export default LandingSection
