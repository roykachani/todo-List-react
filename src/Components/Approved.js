import ItemSuccess from "./ItemSuccess"

const Approved = ({activities,deleteActivity,toggleTask,addActivity}) => {
    
    return(
        <>
            {activities.length === 0 && <h4>No hay tareas cumplidas</h4>}
            {activities.map((item) =>  ( 
                item.state === true ? <ItemSuccess  key={item.id} {...item} deleteActivity={deleteActivity} toggleTask={toggleTask} /> : null
            )) 
            }
        </>
    )
}

export default Approved;