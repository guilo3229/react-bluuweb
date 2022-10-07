import { useState } from "react"


const Formulario = () => {
    // cuando utilizaramos un objeto o una rray tenemos que hacer algo diferente, el setTodo va actualizando este objeto gigante
    const[todo, setTodo] = useState({
        // Las propiedades que sean iguales al name para mejor y mas rapida creacion
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,

    })
const [error, setError] = useState(false)
     const handleSubmit =(e) =>{
        e.preventDefault()
        const {todoName, todoDescripcion} = todo
        if(!todoDescripcion.trim()||!todoName.trim()){

            setError(true)
            return
        }console.log(todo)
        setError(false)
     }
     const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        console.log(e.target.type)

        const {name,value, checked, type} = e.target
        setTodo({
            ...todo,
            // asi podemos pasar una propeidad dinámica los nombre de las propiedades no pueden tener puntos por eso los corchetes
            [name]: type === "checkbox" 
            ? checked 
            : value
        })
    }
    const PintarError = () => (
        <div className="alert alert-danger">campos obligatorios</div>

    )

  return (
    <>
        <h2>formulario controlado</h2>

        {
            error && <PintarError/>
        }
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Ingrese Todo"  
            name = "todoName"    
            className="form-control mb-2" 
            // el onchange va a estar detectando el cambio
            onChange={handleChange}    
            // con el Onchenge es necesario el value
            value ={todo.todoName}
                    />
            <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del Todo"
                onChange={handleChange}   
                value ={todo.todoDescripcion}
            />
            <select
             name="todoEstado"
             className="form-control mb-2"
             onChange={handleChange} 
             value ={todo.todoEstado}
             >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <div className="form-check">
                <input 
                className="form-check-input" 
                type="checkbox" 
                checked={todo.todoCheck}
                name= "todoCheck" 
                id="flexCheckDefault"
                onChange={handleChange} 
                />  
                <label 
                className="form-check-label" 
                htmlFor="flexCheckDefault"/>
                    Dar prioridad
                <label/>
            </div>
            <button 
             className=" btn btn-primary" type="submit"
            >Agregar</button>
        </form>
    </>
  )
}

export default Formulario