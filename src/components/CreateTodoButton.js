import React from "react";
import "../css/CreateTodoButton.css"

function CreateTodoButton (){
    const onClickButton = (msj) => alert(msj)
    return(
        <button 
        className='CreateTodoButton'
        onClick={()=>onClickButton("Aqui deberia ir un modal")}
        >
        +
        </button>
    );
};

export { CreateTodoButton };