import React, {useState} from 'react';

export default function ContactForm(props){
    function getId() {
        let id = (5999 - Math.round(Math.random() * 392))
        return id.toString()
    } 
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
        var Id = getId()
        setData(data.id=Id)
        let email = document.getElementById("email").value
        let emailValido = validateEmail(email)
        emailValido?props.save({...data}):alert("Email inválido")
        document.getElementById("formAdd").reset()
    }
    const handleEdit = (evt) =>{
        setData(data.id=contatoId)
        evt.preventDefault()
        let email = data.email
        let emailValido = validateEmail(email)
        emailValido?props.update({...data}):alert("Email inválido")
    }
    

    if(props.edit){
        return(
            <div>
                <form onSubmit={handleEdit} id="formEdit">
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
                <form onSubmit={handleSubmit} id="formAdd">
                    <input required placeholder="Nome" className="border-black mb-3 text-black rounded"  onChange={changeField('name')}/>
                    <br/>
                    <input placeholder="Email" id="email" className="border-black mb-3 text-black rounded"  onChange={changeField('email')}/>
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