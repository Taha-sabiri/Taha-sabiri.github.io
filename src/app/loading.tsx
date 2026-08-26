'use client'
import { useEffect, useState } from "react"

export default function Loading() {
  const [fade, setFade] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setFade(true), 1100)
    return () => clearTimeout(t)
  }, [])
  return (
    <div dir="ltr" className={`min-h-screen bg-black grid place-items-center px-6 transition-opacity duration-[800ms] ease-out ${fade ? "opacity-0" : "opacity-100"}`}>
      <div className="text-center ">
        <p className="text-[11px] tracking-[0.45em] text-neutral-500 font-light">TAHA SABIRI | PORTFOLIO</p>
        <div className="mt-4 h-px w-full bg-white/10 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-white animate-[load_1.1s_ease-in-out_infinite]" />
        </div>
        <style>{`@keyframes load{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}`}</style>
      </div>
    </div>
  )
}
