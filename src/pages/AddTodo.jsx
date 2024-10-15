import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodos = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        // collect form input
        const formData = new FormData(event.target)
        // Post data to todo api
          await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`,formData);
          
        // Goto the homepage
        navigate('/');

    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="Enter Todo" required name="title" /> 
                <input type="file" required name="icon" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default AddTodos;