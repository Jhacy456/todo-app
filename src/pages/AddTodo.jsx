import { useNavigate } from "react-router-dom";

const AddTodos = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        // Post data to todo api
        // Goto the homepage
        navigate('/');

    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="Text" placeholder="Enter Todo" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default AddTodos;