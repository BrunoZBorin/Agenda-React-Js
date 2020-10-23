import React from 'react'
import excluir from './excluir.png';
import editar from './editar.png';


export default function Card(props){
    let {name, email} = {...props.data}
    return(
        <div className="flex flex-row p-4 bg-white text-gray-600 rounded-lg">
            <div  >
                <span className="block text-2xl font-semibold">{name}</span>
                <span className="block text-2xl font-gray-500">{email}</span>
            </div>
            <button onClick={()=>props.edit(props.contact)} className="p-4 bg-white text-gray-600 rounded-lg">
                <img className="icon" src={editar}  alt=""/>
            </button>
            <button onClick={()=>props.del(props.contact)} className="p-4 bg-white text-gray-600 rounded-lg">
                <img className="icon" src={excluir} alt=""/>
            </button>
        </div>
    )
}