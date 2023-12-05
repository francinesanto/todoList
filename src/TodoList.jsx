import React, { useState } from "react";
import './TodoList.css'
import Img from './assets/Img.jpeg'

function TodoList() {

    const [lista, setLista ] = useState([])
    const [novoItem, setNovoItem] = useState('')

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }])
        setNovoItem('')
        document.getElementById('entrada').focus()
    }

    function clicou(index){
        const listaAux = [...lista]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }

    function deletar(index){
        const listaAux = [...lista]
        listaAux.splice(index,1)
        setLista(listaAux)
    }

    function deletaTudo(){
        setLista([])
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                    id="entrada"
                    type="text" 
                    value={novoItem}
                    onChange={(e) => {setNovoItem(e.target.value)}} 
                    placeholder="Adicione uma tarefa" />
                <button className="add" type="submit">Add</button> 
            </form>

            <div className="listaTarefas">
                <div style={{textAlign: 'center'}}>
                    {
                        lista.length <1 
                        ? 
                        <img className="img" src={Img}/>
                        :
                        lista.map((item, index) => ( 
                        <div key={index} className={item.isCompleted ? 'itemCompleto' : 'item'}>
                        <span onClick={() => { clicou(index) }}>{item.text}</span>
                        <button onClick={() => { deletar(index) }} className="del">Deletar</button>
                        </div>
                    ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={() => { deletaTudo() }} className="delAll">Deletar todas</button>
                    }

                </div>

                
                    
    
                
            </div>
        </div>
    )
}

export default TodoList