import React from 'react'

export default function Card({data}){
    let {name, email} = {...data}
    return(
        <div  className="p-4 bg-white text-gray-600 rounded-lg">
            <span className="block text-2xl font-semibold">{name}</span>
            <span className="block text-2xl font-gray-500">{email}</span>
        </div>
    )
}