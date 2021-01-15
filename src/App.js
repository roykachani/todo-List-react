import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
import Approved from "./Components/Approved"
import EditTask from "./Components/EditTask"
import './App.css';

function App() {
  
  const [activities,setActivities] = useState([])
  const [saveTask,setSaveTask] = useState([])
  const [showEditTask, setShowEditTask] = useState(false);


  const addActivity = (activity) => {
    setActivities([...activities, activity])
    
  }
  //funcion para eliminar tarea
  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id))
   
  }
  //funcion modificadora de estado
  const toggleTask = (id) => {
    
    setActivities(activities.map((activity) => (activity.id === id ? { ...activity, state: !activity.state } : activity)))
    
  }
  console.log([activities])
  //funcion activadora de modal
  const showModal = () =>{
    setShowEditTask(!showEditTask)
  }
  
  //funcion selectora de tarea a editar
  const selectEditTask = (id) =>{
    const editTask = activities.filter((activity) => (activity.id === id ? activity : null))
    setSaveTask(editTask[0])
    showModal()
  }

  const setEditedTask = (newActivity) => {
    const newTask = activities.map((task) => (task.id === newActivity.id ? {...task, task: newActivity.task} : task))
    setActivities(newTask)
  } 


  return (
    <Container fluid="md">
      <Header title="To Do APP" />
      <Row>
        <Col md={2}>
            <Create addActivity ={addActivity}/>
        </Col>
        <Col me={6}>
            <List activities={activities}
             deleteActivity={deleteActivity} 
             toggleTask={toggleTask}
             addActivity={addActivity}
             selectEditTask={selectEditTask}
             />
        </Col>
        <Col md={4}>
            <Approved activities={activities} 
            deleteActivity={deleteActivity} 
            toggleTask={toggleTask}
             addActivity ={addActivity}
             />
        </Col>
      </Row>
      <EditTask selectEditTask={selectEditTask} 
      setEditedTask={setEditedTask} 
      saveTask={saveTask} 
      showModal={showModal} 
      showEditTask={showEditTask} 
      />
    </Container>
    );
}

export default App;
