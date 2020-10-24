import React, {useState} from 'react'
import Card from './ContactCard';
import ContactForm from './ContactForm';

export default function ContactList(){
    
    let [list, setList] = useState([/*{name:'', email:'', id:'', cargo:'', empresa:''}*/])
    let [edit, setEdit] = useState({editForm:false, editId:''})
    
    const addItem = (item) => setList([...list, item])
    const deleteItem = (id)=>{
        console.log(id)
        setList(list.filter(item => item.id !== id))
    }
    
    const editItem = (item)=>{
        setEdit({editId:item, editForm:!edit.editForm})
    }

    const updateItem = (item)=>{
        setList(
            list.map(el => 
                el.id === item.id 
                ? {...el, name : item.name, email : item.email, cargo : item.cargo, empresa : item.empresa } 
                : el
        ))
        setEdit({editForm: false})
    }
    
    
    let cards = list.map(contact =>(
            <div key={contact.id}>
                <div  className="flex flex-row mb-4">
                    <Card  data={contact}
                    edit={editItem}
                    del={deleteItem}
                    contact={contact.id}
                    />
                </div>
                {edit.editForm === true && edit.editId === contact.id?
                    <ContactForm contatos={list} edit={contact.id} update={updateItem}/>
                    :null}
            </div>
    ))
    
    
    return(
        <div className="w-6/12">
            <ContactForm save={addItem}/>
            <div>{cards}</div>
        </div>
        
    )   
}