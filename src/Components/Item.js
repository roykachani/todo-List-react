import {Alert, Button,Row,Col,FormCheck} from "react-bootstrap"

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
        <Alert key={id} variant="secondary">
            <Row className=" m-0 p-0">
            <Col md={9} className="">
            <p>{task}</p>
            
            </Col>
            <Col md={3} className="">
            
            <Button variant="danger" id={id} onClick={deleteTask}>borrar</Button>
            <FormCheck id={id} onChange={completeTask}></FormCheck>
            <Button variant="warning" id={id} onClick={handleEdit}>📝</Button>
            </Col>
            </Row>
            
        </Alert>
        
    )
}

export default Item;