import {Alert, Button,Row,Col,FormCheck} from "react-bootstrap"

import shortid from "shortid"


const ItemSuccess = ({id,task,state,deleteActivity,toggleTask,addActivity,activities}) =>{
    

    const deleteTask = (e) =>{
        const {id}= e.target
        deleteActivity(id)
        
        
    }
    const completeTask = (e) =>{
        const {id}= e.target
        
        toggleTask(id)
    
    }
    console.log(state)
 
    
    return(
        <Alert key={id} variant="success">
            <Row className=" m-0 p-0">
            <Col md={9} className="">
            <p>{task}</p>
            
            </Col>
            <Col md={3} className="">
            
            <Button variant="danger" id={id} onClick={deleteTask}>borrar</Button>
            <FormCheck id={shortid()} onChange={completeTask}></FormCheck>
            </Col>
            </Row>
            
        </Alert>
        
    )
}

export default ItemSuccess;