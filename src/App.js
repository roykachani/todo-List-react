import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
import Approved from "./Components/Approved"
import './App.css';

function App() {
  //estado para pendientes
  const [activities,setActivities] = useState([])
  //estado para completados
  // const [stateActivities, setStateActivities] = useState([])
  
  const addActivity = (activity) => {
    setActivities([...activities, activity])
    
  }
  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id && activity.state === true))
    setActivities(activities.filter((activity) => activity.id !== id && activity.state === false))
    
    
    console.log("borrar")
  }
  
  const toggleTask = (id) => {
    
    setActivities(activities.map((activity) => (activity.id === id ? { ...activity, state: !activity.state } : activity)))
    
  }
  console.log([activities])
  

  return (
    <Container fluid="md">
      <Header title="To Do APP" />
      <Row>
        <Col md={2}>
            <Create addActivity ={addActivity}/>
        </Col>
        <Col me={6}>
            <List activities={activities} deleteActivity={deleteActivity} toggleTask={toggleTask}/>
        </Col>
        <Col md={4}>
            <Approved activities={activities} deleteActivity={deleteActivity} />
        </Col>
      </Row>
    </Container>
    );
}

export default App;
