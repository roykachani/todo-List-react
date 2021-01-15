import {Alert, Button,Row,Col} from "react-bootstrap"
import "./AlertItem.css"

const Item = ({id,task,state,deleteActivity,toggleTask,selectEditTask}) =>{
    
    const deleteTask = (e) =>{
        const {id}= e.target
        deleteActivity(id)
    }
    const completeTask = (e) =>{
        const {id}= e.target
        toggleTask(id)
    }

    const handleEdit = (e) =>{
        const {id}= e.target
        selectEditTask(id)

    }
    

    return(
        <Alert className="alertItem" key={id} variant="secondary">
            <Row className=" m-0 p-0">
                <Col md={9} className="tarea">
                    <p>{task}</p>
                </Col>
                <Col md={3} className="butons">
                    <Row>
                    <Button variant="danger" id={id} onClick={deleteTask}><i id={id} onClick={deleteTask} className="fas fa-trash"></i></Button>
                    <Button variant="success" id={id} onClick={completeTask}><i id={id} onClick={completeTask} className="fas fa-check"></i></Button>
                    <Button variant="warning" id={id} onClick={handleEdit}><i id={id} onClick={handleEdit} className="fas fa-edit"></i></Button>
                    </Row>
                </Col>
            </Row>
            
        </Alert>
        
    )
}

export default Item;