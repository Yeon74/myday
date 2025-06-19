const TodoList = ({ todos, onDelete, onToggle, className }) => {
    if (todos.length === 0) {
        return <div className="empty-msg">할일이 없습니다.</div>;
    }
    return (
        <ul className={className}>
            {todos.map((item) => {
                return (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => { onToggle(item.id) }}
                            checked={item.done}
                        />
                        {/* style 속성은 삭제, 필요하면 아래처럼 주석 처리 */}
                        {/* <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}> */}
                        <span className={item.done ? "done" : ""}>
                            {item.todo}
                        </span>
                        <button onClick={() => { onDelete(item.id) }}>삭제</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;

