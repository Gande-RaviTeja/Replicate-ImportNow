import React from 'react'

export default function SectionHead({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-widest mb-4 ${light ? 'text-red-400' : 'text-[#e3241b]'}`}>
          <span className={`w-5 h-0.5 rounded-full ${light ? 'bg-red-400' : 'bg-[#e3241b]'}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`section-h2 font-sora ${light ? 'text-white' : 'text-[#0a0a0a]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-zinc-400' : 'text-[#52525b]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
