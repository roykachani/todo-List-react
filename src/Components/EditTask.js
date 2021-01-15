import {Row,Modal,Form, Button} from "react-bootstrap"
import {useState} from "react"

const EditTask = ({saveTask,showModal,showEditTask,setEditedTask}) => {
    const inicialState = ("")
    const [newTask, setNewTask]= useState(inicialState)
    
    const handleClose = (e) => {
       showModal()
    }
    
    
    const handleInput = (e) => {
        const {value} = e.target
       
        setNewTask(value)
    }
    
    
    const handleSaveEdit = (e) =>{
        const newObjt = {
            ...saveTask,
            task: newTask
        };        
        showModal()
        setEditedTask(newObjt)
        console.log(newObjt)
        setNewTask(inicialState)
        
    }

    
    
    return (
        <Row className="modal-container">
            {showEditTask &&
            <Modal.Dialog >
                    <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Edita tu tarea</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <input type="text" name="task"  placeholder="Edita tu tarea" onChange={handleInput}/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" onClick={handleSaveEdit}>Guardar</Button>
                </Modal.Footer>
            </Modal.Dialog>}
        </Row>
    )
}

export default EditTask;
