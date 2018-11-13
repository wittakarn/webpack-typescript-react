import * as React from 'react';
import { Todo } from './Todo';

export interface TodoListProp {
    todos: {
        id: number,
        completed: boolean,
        text: string,
    }[],
    onTodoClick: (index: number) => void,
}

export const TodoList: React.StatelessComponent<TodoListProp> = (props: TodoListProp) => {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => props.onTodoClick(index)} />
            ))}
        </ul>
    );
}
