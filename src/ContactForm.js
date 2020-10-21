import React, {useState} from 'react';
// import validator from 'validator'

export default function ContactForm(props){
    var contatos = props.contatos
    var contatoId = props.edit
    const [data, setData] = useState({name:'', email:'', id:'', cargo:'', empresa:''})

    const changeField = (field) => {
        
        const change = (evt) => setData({...data, [field]: evt.target.value})
        return change
    }
    function validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
      }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        let email = document.getElementById("email").value
        let emailValido = validateEmail(email)
        emailValido?props.save({...data}):alert("Email inválido")
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
                    <input required placeholder="Nome" id="nome" className="border-black mb-3 text-black rounded" onChange={changeField('name')}/>
                    <br/>
                    <input placeholder="Email" id="email" className="border-black mb-3 text-black rounded" onChange={changeField('email')}/>
                    <br/>
                    <input placeholder="Cargo" id="cargo" className="border-black mb-3 text-black rounded" onChange={changeField('cargo')}/>
                    <br/>
                    <input required placeholder="Empresa" id="empresa" className="border-black mb-3 text-black rounded" onChange={changeField('empresa')}/>
                    <br/>
                    <button type='submit'>Editar</button>
                </form>
              </div>
            )    
    }else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input required placeholder="Nome" className="border-black mb-3 text-black rounded"  onChange={changeField('name')}/>
                    <br/>
                    <input placeholder="Email" id="email" className="border-black mb-3 text-black rounded"  onChange={changeField('email')}/>
                    <br/>
                    <input placeholder="Id" className="border-black mb-3 text-black rounded"  onChange={changeField('id')}/>
                    <br/>
                    <input placeholder="Cargo" id="cargo" className="border-black mb-3 text-black rounded" onChange={changeField('cargo')}/>
                    <br/>
                    <input required placeholder="Empresa" id="empresa" className="border-black mb-3 text-black rounded" onChange={changeField('empresa')}/>
                    <br/>
                    <button type='submit'>Adicionar</button>
                </form>
            </div>
        )
    }
    
}