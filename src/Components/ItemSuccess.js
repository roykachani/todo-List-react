import {Alert,Button,Row,Col,FormCheck} from "react-bootstrap"


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
        <Alert key={id} variant="success">
            <Row className=" m-0 p-0">
            <Col md={9} className="">
            <p>{task}</p>
            
            </Col>
            <Col md={3} className="">
            
            <Button variant="danger" id={id} onClick={deleteTask}>borrar</Button>
            <FormCheck id={id} onChange={unCompleteTask}></FormCheck>
            </Col>
            </Row>
            
        </Alert>
        
    )
}

export default ItemSuccess;