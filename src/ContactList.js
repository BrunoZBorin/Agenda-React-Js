import React, {useState} from 'react'
import Card from './ContactCard';
import {getContacts} from './Contatos';
import ContactForm from './ContactForm'
import trash from './delete.png';

export default function ContactList(){
    
    let [list, setList] = useState(getContacts())
    let [edit, setEdit] = useState({editForm:false, editId:''})
    
    const deleteItem = (id)=>{
        console.log(id)
        setList(list.filter(item => item.id !== id))
    }
    
    const editItem = (item)=>{
        setEdit({editForm:true, editId:item.id})
    }

    const updateItem = (item)=>{
        setList(
            list.map(el => 
                el.id === item.id 
                ? {...el, name : item.name, email : item.email } 
                : el
        ))
        setEdit({editForm: false})
    }

    let cards = list.map(contact =>(
        <div>
            <div key={contact.id} className='flex flex-row'>
                <Card  data={contact}/>
                <button onClick={()=>editItem(contact)}>
                    Editar
                </button>
                <button onClick={()=>deleteItem(contact.id)}>
                    <img src={trash} className="trash" alt=""/>
                </button>
            </div>
            {edit.editForm === true && edit.editId === contact.id?
                <ContactForm contatos={list} edit={contact.id} update={updateItem}/>
                :null}
        </div>
    ))
    
    const addItem = (item) => setList([...list, item])
    return(
        <div className="w-6/12">
            <ContactForm save={addItem}/>
            <div>{cards}</div>
        </div>
        
    )
}