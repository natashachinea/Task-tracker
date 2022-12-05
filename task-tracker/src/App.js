import Header from './Header.js'
import Tasks from './Tasks';
import Task from './Task';
import AddTask from './AddTask';
import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Homework',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'cooking',
        day: 'Feb 10th at 7:30pm',
        reminder: false,
    }
])
//Add task 
const addTask = ( task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}
//delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggleReminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}
  return (
    <div className="container">
      <Header /> 
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/> ) : (
          'No tasks to show'
        )}
    </div>
  );
}

export default App
