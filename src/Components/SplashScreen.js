import React from 'react'

import TitleBar from './TitleBar'
import Timer from './Timer'


// import assets
import bgimage from '../assets/images/splash/splash_bg.png'
import luluOfficialLogo from '../assets/images/common/lulu_logo.png'
import luluTrolleyHeroLogo from '../assets/images/common/app_title.png'
import startButton from '../assets/images/splash/start_button.png'
import { ProductConsumer } from './Context'

export default function Splashscreen({ trigger }) {


    const StartButton = ({ }) => {
        return (
            <>
                <ProductConsumer>
                    {(values) => {
                        return (
                            <img src={startButton} height='35px'
                                onClick={() => {
                                    values.updateScreenName('instructions')
                                }
                                } />
                        )
                    }}

                </ProductConsumer>
            </>
        )
    }


    return (
        <div style={style.bgImg} className="container">
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: '50px'
            }}>
                <LuluOfficialLogo />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: '40px'
            }}>
                <LuluTrolleyHeroLogo />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: '40px'
            }}>
                <StartButton />
            </div>
        </div>
    )
}



const LuluOfficialLogo = () => {
    return (
        <img src={luluOfficialLogo} height='55px' />
    )
}

const LuluTrolleyHeroLogo = () => {
    return (
        <img src={luluTrolleyHeroLogo} height='110px' />
    )
}

const style = {
    bgImg: {
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

