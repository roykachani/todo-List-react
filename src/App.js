import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Approved from "./Components/Approved"
import EditTask from "./Components/EditTask"
import './App.css';

function App() {
  
  const [activities,setActivities] = useState([])
  const [saveTask,setSaveTask] = useState([])
  const [showEditTask, setShowEditTask] = useState(false);

  //funcion que guarda las nuevas tareas
  const addActivity = (activity) => {
    setActivities([...activities, activity])
    
  }
  //funcion para eliminar tarea
  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id))
   
  }
  //funcion modificadora de estado a completado/pendiente
  const toggleTask = (id) => {
    
    setActivities(activities.map((activity) => (activity.id === id ? { ...activity, state: !activity.state } : activity)))
    
  }
  
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
  //funcion que guarda la tarea editada
  const setEditedTask = (newActivity) => {
    const newTask = activities.map((task) => (task.id === newActivity.id ? {...task, task: newActivity.task} : task))
    setActivities(newTask)
  } 


  return (
    <>
    <Container className="container-app" fluid="md">
      <Header title="To Do APP " />
      <Row className="container-create">
        <Col className="create-col" md={2}>
            <Create addActivity ={addActivity}/>
        </Col>
        <Col className="container-list ">
          <Row className="list-box justify-content-md-center">
        <Col className="unComplete-box" md={5} >
            <List activities={activities}
             deleteActivity={deleteActivity} 
             toggleTask={toggleTask}
             addActivity={addActivity}
             selectEditTask={selectEditTask}
             />
        </Col>
        <Col className="complete-box" md={5}>
            <Approved activities={activities} 
            deleteActivity={deleteActivity} 
            toggleTask={toggleTask}
             addActivity ={addActivity}
             />
        </Col>

          </Row>
        </Col>
      </Row>
      <Footer/>
    </Container>
        {/* modal */}
      {showEditTask && <EditTask selectEditTask={selectEditTask} 
      setEditedTask={setEditedTask} 
      saveTask={saveTask} 
      showModal={showModal} 
      showEditTask={showEditTask} 
      />}
      </>
    );
}

export default App;
