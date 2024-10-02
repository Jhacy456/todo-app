import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            
            <div>
            <h1>All Todos</h1>
            <TodoTile title={'Creating a React App'}/>
            <TodoTile title={'Install Tailwind CSS'}/>
            <TodoTile title={'Commit code to Github'}/>
            <TodoTile title={'Host it on Netlify'}/>
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    )
}

export default Todos;



