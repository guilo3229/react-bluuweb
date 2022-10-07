import { useState } from "react";


const Contador = () => {

    const [contador, setContador] = useState(10)

    const aumentar =()=> {
        setContador(contador + 1)
        console.log(contador)
    }
    const disminuir =()=> {
        if(contador >0){
        setContador(contador - 1)
        console.log(contador)}
        else{
            console.log(contador)
            return
        }
    }
  return (
    <>
        <h2>Contador</h2>
        <h3>{contador}</h3>
        <button className="btn btn-dark" onClick ={aumentar}>aumentar</button>
        <button className="btn btn-primary" onClick ={disminuir}>Disminuir</button>
    </>
  )
}

export default Contador
