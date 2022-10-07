import { click } from "@testing-library/user-event/dist/click"
import { useRef } from "react"


const FormNoControlado = () => {

    const formulario = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        // como en ajvascript pero con corrent en el fomData
        const datos = new FormData(formulario.current)
        // sprite operator  nos da la llave y el valor entries
        console.log(...datos.entries())
        // De esta manera capturamos la propeidad que queremos y su valor
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)
        // En la destructuracion las constantes tienen que llamarse igual a las propiedades del objeto que se va a destructurar
        const {todoDescripcion, todoEstado,todoName} = objetoDatos
        console.log(todoDescripcion)
        if (!todoDescripcion.trim() || !todoName.trim()){
            console.log("no poo esta vacio")
            return
        }
        console.log("paso validaciones")
    }

    
  return (
    <>
    <h2> no controlado</h2>
        <form ref = {formulario} onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Ingrese Todo"  
            name = "todoName"    
            className="form-control mb-2"     
            defaultValue= "Tarea #01"            />
            <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del Todo"
                defaultValue="Desccripcion Tarea #01"   
            />
            <select
             name="todoEstado"
             className="form-control mb-2"
             >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
             </select>
             <button 
             className=" btn btn-primary"
             >Agregar</button>
        </form>
    </>
    
  )
}

export default FormNoControlado