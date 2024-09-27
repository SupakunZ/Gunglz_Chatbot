import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Developer by Supakun Thata</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='Lama Dev Facebook' />
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='Lama Dev Instagram' />
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='Lama Dev Twitter' />
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='Lama Dev Youtube' />
      </div>
      {/* <div>Terms of Service | Privacy Policy</div> */}
    </div>
  )
}

export default Footer