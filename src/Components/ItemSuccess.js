import {Alert,Button,Row,Col} from "react-bootstrap"
import "./ItemSuccess.css"


const ItemSuccess = ({id,task,state,deleteActivity,toggleTask}) =>{
   
    const deleteTask = (e) =>{
        const {id}= e.target
        deleteActivity(id)
        
        
    }
    

    const unCompleteTask = (e) =>{
        const {id}= e.target
        toggleTask(id)
     
    }
    
 
    
    return(
        <Alert className="alertItem" key={id} variant="success">
            <Row className=" m-0 p-0">
            <Col md={9} className="tarea">
            <p>{task}</p>
            
            </Col>
            <Col md={3} className="butons">
            
                <Button variant="danger" id={id} onClick={deleteTask}><i id={id} onClick={deleteTask} className="fas fa-trash"></i></Button>
                <Button id={id} onClick={unCompleteTask}><i id={id} onClick={unCompleteTask} className="fas fa-tasks"></i></Button>
            </Col>
            </Row>
            
        </Alert>
        
    )
}

export default ItemSuccess;