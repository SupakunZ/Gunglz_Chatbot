import { Outfit } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

// SEO
export const metadata = {
  title: "Gunglz Chatbot",
  description: "Gunglz is a chatbot application developed using the Next.JS, Tailwind CSS and Google Generative AI. It enables users to create intelligent chatbots efficiently. This application incorporates both the bot's artificial intelligence component and chat management system, while also supporting seamless integration of REST APIs and comes equipped with numerous features, including learning capabilities, memory retention, topic-based conversation handling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
