import React, { useContext, useState } from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtend] = useState(false)
    const { onSent, prevPrompts, setRecentPromt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        await onSent(prompt)
    }

    const habdleClick = () => {
        setExtend(!extended);
        document.querySelector('.sidebar').classList.toggle('addwidth');
    }

    return (
        <div className='sidebar'>
            <div className="top" style={{ overflow: "hidden" }}>
                <img onClick={habdleClick} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p style={{ width: "61.5px" }}>New Chat</p> : null} {/* ? => เป็นการตรวจสอบเงื่อนไขเหมือน if else ถ้าใช้ให้แสดง tag นี้ แต่ไม่ใช่ให้เป็น null*/}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}
                    </div>) : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar