import React from 'react'

export default function Eyebrow({ children, light = false }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-widest ${light ? 'text-red-400' : 'text-[#e3241b]'}`}>
      <span className={`w-5 h-0.5 rounded-full ${light ? 'bg-red-400' : 'bg-[#e3241b]'}`} />
      {children}
    </span>
  )
}
