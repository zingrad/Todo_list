import React, { useState }  from 'react'

function TodoForm(props){

    const [text,setText] = useState("")

    function handleChange(event){
        let t = event.target.value //dessa forma está pegando os textos digitados no input
        setText(t);
    }

    function addItem(event){
        event.preventDefault();//previne comportamento padrão
        if(text){//se tiver um texto você pode adicionar se for vazio não 
        // setItems([...items, text]) //aqui foi passado um array para que funcione o Map de items
        // porque a função Map pede um Array e o useState de items é um Array vazio
        props.onAddItem(text);
        setText("") //aqui seta o texto para vazio novamente pra isso tem que colocar
        //no input o value={text}
        }
    }

    return( <form>
        <input onChange={handleChange} type="text" value={text}></input> 
            <button onClick={addItem}>Add</button>
    </form>)

}

export default TodoForm