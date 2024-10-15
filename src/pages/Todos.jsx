import { useEffect, useState } from "react";
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
import axios from "axios";



 

const Todos = () => {
    // 1.Declare state to store todos
    const [todos, setTodos] = useState([]);
    // 2. Define a function to get todos
    const getTodos = async () => {
        // Use axios to get todos
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos?limit=0`);
        console.table(response.data);
        // Update todos state
        setTodos(response.data);
    }
    // 3. Call function with useEffect
    useEffect(() =>{
        getTodos();
    },[])

    return (
        <div>

            <div>
                <h1>All Todos</h1>
                    {todos.map((todo) =>{
                        return <TodoTile title={todo.title} key={todo.id} icon={todo.icon}/>
                    })}
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    )
}

export default Todos;



