'use client'
import React, { useContext, useState } from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { ThemeContext } from '../../app/context/ThemeContext';
import Image from 'next/image';
// import menu_icon from '../../assets/menu_icon.png'

const Sidebar = () => {
    const { onSent, prevPrompts, mode, habdleClick, extended, setExtend } = useContext(ThemeContext)

    const loadPrompt = async (prompt) => {
        setExtend(!extended)
        document.querySelector('.sidebar').classList.remove('addwidth_nav');
        await onSent(prompt)
    }

    return (
        <div className={`sidebar ${mode == 'dark' ? 'black-bg' : 'light-light'} `}>
            <div className="top" style={{ overflow: "hidden" }}>
                <Image onClick={habdleClick} className='menu' src={assets.menu_icon} alt="" />
                <div className={`new-chat ${mode == 'dark' ? 'black-light' : 'bg-light'}`}>
                    <Image src={assets.plus_icon} alt="" />
                    {extended ? <p style={{ width: "62.5px" }}>New Chat</p> : null} {/* ? => เป็นการตรวจสอบเงื่อนไขเหมือน if else ถ้าใช้ให้แสดง tag นี้ แต่ไม่ใช่ให้เป็น null*/}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className={`recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                                    <Image src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}
                    </div>) : null
                }
            </div>
            <div className="bottom">
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <Image src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <Image src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <Image src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar