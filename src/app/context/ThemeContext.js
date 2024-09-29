"use client"

import { createContext, useState } from "react"
import run from "../../config/gemini";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark")
  const [input, setInput] = useState(''); // inputbar
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]); // sidebar history
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState('');
  const [extended, setExtend] = useState(false)

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord)
      // console.log(resultData)
    }, 75 * index);
  }

  const habdleClick = (prompt) => {
    setExtend(!extended);
    if (!prompt) {
      return document.querySelector('.sidebar').classList.toggle('addwidth');
    }
    document.querySelector('.sidebar').classList.toggle('addwidth_nav');
  }

  const handleDelete = (name) => {
    const result = prevPrompts.filter((data) => data != name)
    setShowResult(false)
    return setPrevPrompts(result)
  }

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    setExtend(false)
  }

  const onSent = async (prompt) => {

    setResultData('')
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    let response;
    if (typeof (prompt) == 'string') {
      response = await run(prompt)
      setRecentPrompt(prompt)
      // console.log('string', prompt)
    } if (typeof (prompt) == 'object') {
      if (!prevPrompts.includes(input)) {
        setPrevPrompts(prev => [...prev, input])
      }
      setRecentPrompt(input)
      response = await run(input)
      // console.log('Object', prompt)
    }
    let responseArray = response.split("**")
    let newResponse = ""
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i]
      }
      else {
        newResponse += "<b>" + responseArray[i] + "</b>"
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponeArry = newResponse2.split(" ");
    for (let i = 0; i < newResponeArry.length; i++) {
      const nextWord = newResponeArry[i]
      delayPara(i, nextWord + " ")
    }
    // setResultData(newResponse2)
    setLoading(false)
    setInput("")
  }

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    toggle,
    mode,
    habdleClick,
    extended,
    setExtend,
    handleDelete,
    setShowResult
  }

  //ส่ง func state จาก store
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}