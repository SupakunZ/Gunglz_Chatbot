'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkmodeToggle/DarkModeToggle'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { ThemeContext } from '@/app/context/ThemeContext'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "App",
    url: "/app"
  },
  {
    id: 3,
    title: "Github",
    url: "https://github.com/SupakunZ/Gunglz_Chatbot"
  },
]

export const Navbar = () => {

  const { habdleClick } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <div className={styles.boxlogo}>
        <Image onClick={() => habdleClick('nav')} className={styles.menunav} src={assets.menu_icon} alt="" />
        <Link href='/' className={styles.logo}>Gunglz</Link>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
        ))}
        <Image className={styles.image} src={assets.user_icon} alt="" />
      </div>
    </div>
  )
}
