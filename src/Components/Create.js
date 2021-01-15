import {Button,Form} from "react-bootstrap";
import {useState} from "react"
import shortid from "shortid"
const Create = ({addActivity}) =>{
    const inicialState = {
        id:"",
        task:"",
        state:false,
    }
// funcion que guarda valores de estado 
    const handleWork = (e) => {
        const {name,value} = e.target;
        setWork({
            ...work,
            [name] : value,
        })
    }
//funcion que crea objeto pisando valores anteriores y limpia input
    const handleSubmit = (e) => {
        e.preventDefault()
        if(work.task.trim() === "") return;
        const taskObjet = {
            ...work,
            id : shortid()
        };
        // console.log(taskObjet);
        setWork(inicialState);
        addActivity(taskObjet);
    }

    const [work, setWork] = useState(inicialState)
    return(
        <>
            <h4>Crear tarea</h4>
            <Form md={4} onSubmit={handleSubmit}>
                <Form.Group>
                    <input type="text" name="task" value={work.task} placeholder="ingresa tu tarea" onChange={handleWork}/>
                </Form.Group>
                <Button variant="primary" type="submit">Agregar tarea</Button>
            </Form>
        </>
    )
}

export default Create;