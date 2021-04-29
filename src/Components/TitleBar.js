import React from 'react'
import luluLogo from '../assets/images/common/app_title.png'
import deal_destination from '../assets/images/common/deal_destination.png'
// import Timer from './Timer'

export default function Titlebar({timerDisplay}) {
    

    return (
        <>
            <div className="title-bar p-2">
                <div style={style.logoContainer} className="logo-container">
                    <img style={style.logo} src={luluLogo} alt="logo"/>
                        {/* <Timer initialMinute={1} initialSeconds={45} /> */}
                        {timerDisplay}
                    <img style={style.logo} src={deal_destination} alt="logo"/>
                </div>
            </div>
        </>
    )
}

const style = {
    logoContainer:{
        display:'flex',
        justifyContent:'space-between',
    },
    logo:{
        // width:'100px',
        height:'55px'
    }
}
