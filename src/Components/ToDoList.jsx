function TodoList(props) {
  return (
    <li key={props.index}>
      <span className="number">{props.index + 1}</span>
      <span className="text" id={"name"+props.index.toString()} >
        <input type="checkbox" checked={props.status} id={"status"+props.index.toString()} onChange={props.onChange} />
        {props.name}
      </span>
      <span className="dots"></span>
      <span><button onClick={props.onClick}>Удалить</button></span>
    </li>
  );
}

export default TodoList;
