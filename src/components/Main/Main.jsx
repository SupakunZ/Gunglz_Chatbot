'use client'
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { ThemeContext } from '../../app/context/ThemeContext'
import Image from 'next/image'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, mode } = useContext(ThemeContext)

    return (
        <div className={`main ${mode == 'dark' ? 'black-box' : null}`}>
            <div className="main-container">
                {/* ถ้าเป็นเท็จ (มี !) จะแสดง tag ด้านหลัง ?  */}
                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <Image src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <Image src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <Image src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <Image src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </>
                    : <div className='result'>
                        <div className="result-title">
                            <Image src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <Image src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <Image src={assets.gallery_icon} alt="" />
                            <Image src={assets.mic_icon} alt="" />
                            <Image onClick={onSent} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        App may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main