import React, {useState} from 'react';

const trash = (<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>)


const pencil = (<svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd"
          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>)

const check = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-square" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path fillRule="evenodd"
          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>)

const uncheck = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-square" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>)

function TodoListItem(props) {


    const {todo, markAsDone, unMark, remove, todoUpdate} = props;

    const isTodoDone = todo.done;
    const todoTitle = todo.title; // можем мы это написать props.todo.title
    const todoId = todo.id
    const titleStyle = isTodoDone === true ? {
        textDecoration: "line-through",
        listStyleType: "none"
    } : {listStyleType: "none"};

    const [isEditMode, setIsEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState(todoTitle);

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    };

    const saveButtonHandler = () => {
        todoUpdate(todoId, newTodo);
        setIsEditMode(false);
    };

    return (
        <div className="form-group">
            {isEditMode ? (
                    <div>
                        <input value={newTodo} onChange={inputHandler}/>
                        <button className="btn btn-outline-success ml-2 mt-2" onClick={saveButtonHandler}>Save</button>
                    </div>
                )

                :

                (
                    <div className="form-group">
                        {isTodoDone
                            ?
                            (
                                <li className="form-group" style={titleStyle} >
                                    {todoTitle}
                                    <button className="btn btn-outline-success ml-2 mt-2" onClick={() => unMark(todoId)}>{check}</button>

                                    <button className="btn btn-outline-warning ml-3 mt-2" onClick={() => setIsEditMode(true)}>{pencil}</button>
                                    <button className="btn btn-outline-danger ml-2 mt-2" onClick={() => remove(todoId)}>{trash}</button>
                                </li>
                            )
                            :
                            (<li className="form-group" style={titleStyle}>
                                {todoTitle}
                                <button className="btn btn-outline-success ml-2 mt-2" onClick={() => markAsDone(todoId)}>{uncheck}</button>

                                <button className="btn btn-outline-warning ml-2 mt-2" onClick={() => setIsEditMode(true)}>{pencil}</button>
                                <button className="btn btn-outline-danger ml-2 mt-2" onClick={() => remove(todoId)}>{trash}</button>
                            </li>)
                        }
                    </div>
                )}


        </div>

    );
}

export default TodoListItem;