import React from 'react'
import Chevron from '../Shared/Icons/Chevron'

const LandingSection = () => {
    return (
        <div className="landingSection">
            <div className="landingSectionBg"></div>
            <div className="landingSectionImageBox">
                <div className="landingSectionImage">
                    <div className="blurred"></div>
                </div>
            </div>
            <div className="landingSectionText">
                <p>hi there👋</p>
                <p>i'm cristian hoza</p>
                <p>full stack developer &#38; web designer</p>
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
