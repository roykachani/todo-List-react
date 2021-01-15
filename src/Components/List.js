import Item from "./Item"


const List = ({activities,deleteActivity,toggleTask,addActivity,selectEditTask}) =>{
  

    return(
        <>
            {activities.length === 0 && <h4>No hay tareas</h4>}
            {activities.map((item) => (
              
              item.state === false ?<Item  key={item.id} {...item} 
              deleteActivity={deleteActivity} 
              toggleTask={toggleTask} 
              addActivity={addActivity} 
              selectEditTask={selectEditTask}/>: null
              
            )) 
            }
        </>
    )
}

export default List;