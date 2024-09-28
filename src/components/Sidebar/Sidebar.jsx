'use client'
import React, { useContext, useEffect, useState } from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { ThemeContext } from '../../app/context/ThemeContext';
import Image from 'next/image';
// import menu_icon from '../../assets/menu_icon.png'

const Sidebar = () => {
    const { onSent, prevPrompts, mode, habdleClick, extended, setExtend, handleDelete } = useContext(ThemeContext)

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
                        <div className='content-recent'>
                            {prevPrompts.map((item, index) => {
                                return (
                                    <div key={index} className={`recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                                        <div onClick={() => loadPrompt(item)}>
                                            <Image src={assets.message_icon} alt="" />
                                            <p>{item.slice(0, 18)}...</p>
                                        </div>
                                        <div onClick={() => handleDelete(item)} className={`${mode == 'dark' ? 'point-icon-dark' : 'point-icon-light'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="19px" width="19px" viewBox="0 -960 960 960" fill="#C4C7C5"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>) : null
                }
            </div>
            <div className="bottom">
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <div>
                        <Image src={assets.question_icon} alt="" />
                        {extended ? <p>Help</p> : null}
                    </div>
                </div>
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <div>
                        <Image src={assets.history_icon} alt="" />
                        {extended ? <p>Activity</p> : null}
                    </div>
                </div>
                <div className={`bottom-item recent-entry ${mode == 'dark' ? 'hover-dark' : 'hover-light'}`}>
                    <div>
                        <Image src={assets.setting_icon} alt="" />
                        {extended ? <p>Setting</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar