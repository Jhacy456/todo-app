import { useNavigate } from "react-router-dom";
import axios, { toFormData } from "axios";

const AddTodos = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        // collect form input
        const formData = new FormData(event.target)
        // Post data to todo api
          await axios.post("https://todoapi-9uev.onrender.com/todos", {
            title: formData.get('todo')
          })
        // Goto the homepage
        navigate('/');

    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="Text" placeholder="Enter Todo" required name="todo" /> 
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default AddTodos;