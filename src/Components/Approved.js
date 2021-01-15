import ItemSuccess from "./ItemSuccess"

const Approved = ({activities,deleteActivity,toggleTask,addActivity}) => {
    
    return(
        <>
             <h4>Tareas completas</h4>
            {activities.map((item) =>  ( 
                item.state === true ? <ItemSuccess  key={item.id} {...item} deleteActivity={deleteActivity} toggleTask={toggleTask} activities={activities} addActivity={addActivity} /> : null
            )) 
            }
        </>
    )
}

export default Approved;