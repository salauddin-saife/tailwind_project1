import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
        <a href="" className={`decoration-0 bg-web_green px-9 py-4 rounded-2xl border-2 border-web_green text-white font-semibold text-[16px] font-poppins hover:bg-transparent hover:text-web_green duration-300 pointer-events-auto ${className}`}>{text}</a></div>
  )
}

export default Button