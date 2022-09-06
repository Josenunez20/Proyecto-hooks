import React, { useReducer } from 'react'

const Hook6 = () => {

    const inputRef = useReducer();

    const [tasks, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task':
                return [
                    ...state,
                    { id: state.length, title: action.title }
                ]
            break;
            case 'remove_task':
                return state.filter((task, index) => index != action.index);
            break;
            default:
                return state;
            break;
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add_task',
            title: inputRef.current.value
        });
    }

    return (
        <>
            <h1>Lista de tareas</h1>
            <form onSubmit={handleSubmit}>
                <label>Tarea</label><br /><br />
                <input type="text" name="title" ref={inputRef} /><br /><br />
                <input type="submit" value="Enviar" />
            </form>
            <div className="tasks">
                {tasks && tasks.map((task, index) => (
                    <div className="task" key={index}>
                        <p>{task.title}</p>
                        <button onClick={() => dispatch({ type: 'remove_task', index: index })}>Borrar</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Hook6;