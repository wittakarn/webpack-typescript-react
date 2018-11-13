import * as React from 'react';

export interface TotoProp {
    onClick: () => void,
    completed: boolean,
    text: string,
}

export const Todo: React.StatelessComponent<TotoProp> = (props: TotoProp) => {
    return (
        <li
            onClick={props.onClick}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
        >
            {props.text}
        </li>
    );
}
