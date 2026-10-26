"use client"

import { useEffect, ReactNode } from "react"
import { useLang } from "@/lib/lang-context"

export function LangWrapper({ children }: { children: ReactNode }) {
  const { lang } = useLang()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr"
  }, [lang])

  return <>{children}</>
}
