const TodoTile = ({ title, icon }) => {
    return (
        <div className="flex border-[20px] ">
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${icon}?shareable_link=409`} alt={title} />
        </div>
    )
}

export default TodoTile;