import {Alert, Button,Row,Col,FormCheck} from "react-bootstrap"

const Item = ({id,task,state,deleteActivity,toggleTask}) =>{
    
    const deleteTask = (e) =>{
        const {id}= e.target
        deleteActivity(id)
    }
    const completeTask = (e) =>{
        const {id}= e.target
        toggleTask(id)
    }
    

    return(
        <Alert key={id} variant="secondary">
            <Row className=" m-0 p-0">
            <Col md={9} className="">
            <p>{task}</p>
            
            </Col>
            <Col md={3} className="">
            
            <Button variant="danger" id={id} onClick={deleteTask}>borrar</Button>
            <FormCheck id={id} onChange={completeTask}></FormCheck>
            </Col>
            </Row>
            
        </Alert>
        
    )
}

export default Item;