import {Button,Form,Row} from "react-bootstrap";
import {useState} from "react"
import shortid from "shortid"
import "./Create.css"

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
            <h4 className="create-title">Crear tarea</h4>
            <Form md={4} onSubmit={handleSubmit}>
                <Form.Group>
                    <input type="text" name="task" value={work.task} placeholder="ingresa tu tarea" onChange={handleWork} autoFocus/>
                </Form.Group>
                <Button variant="primary" type="submit">Agregar tarea</Button>
            </Form>
            <Row className="create-text">
            <p>Cuando la cumplas, dale un check! <i className="check fas fa-check"></i>. Puedes borra <i className="delete fas fa-trash"></i>, editar <i className="edit fas fa-edit "></i> y además volver atras <i className="unCheck fas fa-tasks"></i>.</p>
            </Row>
            
        </>
    )
}

export default Create;