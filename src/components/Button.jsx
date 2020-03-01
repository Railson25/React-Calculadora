import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    console.log(classes)
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}   
            className={classes}>
            {props.label}
        </button>
    )
}  
  //onClick retorna o mesmo  conteudo do botao ussando
        // && para garantir que so vai entrar na segunda parte
        //da expressão se a primeira for válida 

//soluçao 02 usando jsx
//export default props => 
//definindo uma expressão sendo delimitada pela crazy
//sempre que tem uma expressçao e chaves dentro de um jsx
// eu posso colocar código JavaScript
//    <button className={`
//        button
//        ${props.operation ? 'operation' : ''}
//        ${props.double ? 'double' : ''}
//        ${props.triple ? 'triple' : ''}
//    `}>
//        {props.label}
//    </button>
