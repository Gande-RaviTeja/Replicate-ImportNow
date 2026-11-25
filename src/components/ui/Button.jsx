import React from 'react'

export default function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-pill font-semibold text-sm transition-all duration-200 cursor-pointer border'
  const variants = {
    primary: 'bg-[#0a0a0a] text-white border-[#0a0a0a] hover:bg-[#e3241b] hover:border-[#e3241b]',
    ghost: 'bg-white text-[#0a0a0a] border-[rgba(0,0,0,0.14)] hover:border-[#0a0a0a]',
    red: 'bg-[#e3241b] text-white border-[#e3241b] hover:bg-[#ff3b30] hover:border-[#ff3b30]',
    white: 'bg-white text-[#0a0a0a] border-white hover:bg-[#f4f4f5]',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...props}>{children}</a>
  return <button type={type} onClick={onClick} className={cls} {...props}>{children}</button>
}
