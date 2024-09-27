// import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import AnimationLottie from "@/components/helper/animation-lottie";
import bot from '../../public/bot.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
          <h1 className={`${styles.title}`}>Gunglz</h1>
          <h1 className={styles.title}>Chatbot AI</h1>
        </div>
        <p className={styles.desc}>
          Transform your ideas into reality with AI, the cutting edge Al chatbot powered by Google Generative Al.
        </p>
        <Button url="/app" text="Get Started" />
      </div>
      <div className={`${styles.item2}`}>
        <AnimationLottie animationPath={bot} />
      </div>
    </div>
  );
}
