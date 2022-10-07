import React from "react"

const Frutas = (props) => {
    
  console.log(props)
  return (
    // solo retorna un elemento padre, para esos casos podemos hacer un fragment, con esto enviamos varios elemento sin padre sin error.
    <>
           <ul>
             { props.frutasApp.map((fruta,index) => (
                <li key ={fruta}>
                 {index+1} - {fruta}
                </li>
          ))}
      </ul>
      <p>Lorem ipsum dolor sit.</p>
    </>
  )
}

export default Frutas
