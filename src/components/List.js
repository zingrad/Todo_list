import React from "react"
import Card from "./Card"
function Doneimg(props){

    if(props.done){
        return(<img alt='done' src="./assets/checkout.svg"></img>)
    }else{
        return(<img alt='undone' src="./assets/checkin.svg"></img>)
    }

}

function List(props){


    return(<ul>

        {props.items.map(item=><li key={item.id}>
            <Card  className={item.done?"done item" : "item"}>
            {item.text}
            <div>
            <button onClick={() => {props.onDone(item)}}><Doneimg done={item.done}></Doneimg></button>
            <button onClick={() => {props.onItemDeleted(item)}}><img alt='delete' src="./assets/delete.svg"></img></button>
            </div>
            </Card>
        </li>)} 
            
         </ul>
    )
}//props recebendo items e dando um map para cada item

export default List;