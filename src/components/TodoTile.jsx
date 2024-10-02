const TodoTile = ({ title }) => {
    return (
        <div className="flex border-[20px] ">
            <input type="checkbox" />
            <p>{title}</p>
        </div>
    )
}

export default TodoTile;