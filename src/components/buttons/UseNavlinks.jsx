import React from 'react'
export default function UseNavlinks({text, icon}) {
    return (
        <button className=' text-black hover:border-2 px-2 w-28 py-1.5 rounded-full'>
            {text}
        </button>
    )
}