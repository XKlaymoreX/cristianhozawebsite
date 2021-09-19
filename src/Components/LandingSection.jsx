import React from 'react'
import Chevron from '../Shared/Icons/Chevron'
import  Image from '../Shared/Media/websiteimage.png'

const LandingSection = () => {
    return (
        <div className="landingSection">
            <div className="landingSectionBg"></div>
            <div className="landingSectionImageBox">
               {/* <div className="landingSectionImage">
                    <div className="blurred"></div>
                </div>*/} 
                <div className="blurred"></div>
                <img src={Image} alt="Cristian Hoza Image, Developer, Designer, Full Stack, Switzerland" width="100%" height="100%" style={{objectFit:'cover',objectPosition:'center',mixBlendMode:'normal',transform:'scale(1.5)',marginTop:'100px'}} />
            </div>
            <div className="landingSectionText">
                <p>hi there👋</p>
                <h1>i'm cristian hoza</h1>
                <h1>full stack developer &#38; web designer</h1>
                <p>Young age, professionality, flexibility<br/>
                    &#38; vast range of growing Tech Skills.<br/>
                    All in One.<br/><br/>

                    Based in Switzerland🇨🇭

                </p>
            </div>
            <div className="landingSectionInviteToAction">
                <Chevron/>
                <div style={{marginTop:'20px'}}>
                    don't scroll down!
                </div>
            </div>
        </div>
    )
}

export default LandingSection
