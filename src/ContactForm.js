import React, {useState} from 'react';

export default function ContactForm(props){
    var contatos = props.contatos
    var contatoId = props.edit
    const [data, setData] = useState({name:'', email:'', id:''})

    const changeField = (field) => {
        const change = (evt) => setData({...data, [field]: evt.target.value})
        return change
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        props.save({...data})
    }
    const handleEdit = (evt) =>{
        setData(data.id=contatoId)
        evt.preventDefault()
        props.update({...data})
    }
    

    if(props.edit){
        return(
            <div>
                <form onSubmit={handleEdit}>
                    <input placeholder="Nome" id="nome" className="border-black mb-3 text-black" onChange={changeField('name')}/>
                    <br/>
                    <input placeholder="Email" id="email" className="border-black mb-3 text-black" onChange={changeField('email')}/>
                    <br/>
                    <button type='submit'>Editar</button>
                </form>
              </div>
            )    
    }else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nome" className="border-black mb-3 text-black"  onChange={changeField('name')}/>
                    <br/>
                    <input placeholder="Email" className="border-black mb-3 text-black"  onChange={changeField('email')}/>
                    <br/>
                    <input placeholder="Id" className="border-black mb-3 text-black"  onChange={changeField('id')}/>
                    <br/>
                    <button type='submit'>Adicionar</button>
                </form>
            </div>
        )
    }
    
}