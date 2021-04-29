import React, { useState } from 'react'
import Winners from './WinnersList'
import enter_details_title from '../assets/images/user_details/enter_details_title.png'
import enter_button from '../assets/images/user_details/enter_button.png'
import { saveUserData } from './controllers/UserDataController'
import Titlebar from './TitleBar'
import { ProductConsumer } from './Context'

export default function Instructions({trigger}) {



    return (
        <div >
           
                <div className="container p-10 ">
                    <div className="space-20"></div>
                    <Titlebar/>
                    <div className="space-20"></div>
                    <div className="space-50"></div>
                    <div className="text-center">
                        <img
                            style={{ width: '200px' }}
                            src={enter_details_title} alt="" />
                    </div>
                    <div className="space-20"></div>
                    
                        {<RenderForm  />}
                    

                <div className="space-50"></div>
                </div>
            
        </div>
    )
}


const RenderForm = ({trigger}) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        console.log(values)
    }

    const PlayButton = () => {
        return (
            <>
            <ProductConsumer>
                {(consumer)=>{
                    return(
                        <img src={enter_button} height='35px'
                            onClick={async () => {
                                console.log('Play button clicked');
                                console.log(values)
                                const result = await saveUserData(values.name, values.email, values.phone, 0);
                                if (result.success) {
                                    //Goto Winners list
                                    consumer.updateScreenName('winnerlist')
                                } else {
                                    console.log(result.data);
                                    alert(result.data)
                                    // Show result.data to UI
                                }
                               
                            }
                        } />
                    )
                }}
            </ProductConsumer>
            </>
        )
    }

    return (
        <>
        <div style={style.instructionBox} className="instruction-box p-10">
            <div style={style.inputFieldTitle}>
                NAME
            </div>
            <div className="space-5"></div>
            <input
                style={{ ...style.inputField }}
                type="text"
                onChange={handleChange('name')}
                value={values.name}
            />

            <div className="space-20"></div>

            <div style={style.inputFieldTitle}>
                EMAIL
            </div>
            <div className="space-5"></div>
            <input
                style={{ ...style.inputField }}
                type="email"
                onChange={handleChange('email')}
                value={values.email}
            />

            <div className="space-20"></div>

            <div style={style.inputFieldTitle}>
                PHONE
            </div>
            <div className="space-5"></div>
            <input
                style={{ ...style.inputField }}
                type="phone"
                onChange={handleChange('phone')}
                value={values.phone}
                max={10}
            />
            <div className="space-20"></div>

        </div>
            <div style={style.button} className="">
                <PlayButton />
            </div>
        </>
    )
}






const style = {
    instructionBox: {
        // height:'',
        backgroundColor: '#1a3f1e',
        borderRadius: '20px',
        padding: '20px'
    },
    content: {
        backgroundColor: 'white',
        borderRadius: '15px',
    },
    heading: {
        padding: '10px',
        backgroundColor: '#1a3f1e',
        borderRadius: '10px',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '40px'
    },
    inputFieldTitle: {
        color: '#f6b243',
        fontWeight: 'bold',
        fontFamily: 'Zil',
    },
    inputField: {
        width: '100%',
        borderRadius: '5px',
        height: '35px',
    }
}