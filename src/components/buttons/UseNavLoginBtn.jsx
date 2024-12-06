import React from 'react'
export default function UseNavLoginBtn({text, icon, className}) {
    return (
        <button className={`${className} text-black border-4 border-black w-28 py-2 hover:scale-105 transition-all duration-300 rounded-full`}>
            {text}
        </button>
    )
}   