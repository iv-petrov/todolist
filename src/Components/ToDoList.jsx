function TodoList (props) {
    return (
        <li key={props.index}>
            <span className="number">{Math.floor(props.index+1)}</span>
            <span className="text">{props.name}</span>
            <span className="dots"></span>
            <span><button onClick={props.onClick}>Удалить</button></span>
        </li>
    );
}
  
  export default TodoList;
  