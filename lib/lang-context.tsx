"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Lang = "he" | "en"
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "he", toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he")
  const toggle = () => setLang((l) => (l === "he" ? "en" : "he"))
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
