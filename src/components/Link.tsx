import * as React from 'react';

export interface LinkProp {
    active: boolean;
    children: boolean;
    onClick: () => void;
}

export const Link: React.StatelessComponent<LinkProp> = (props: LinkProp) => {
    if (props.active) {
        return <span>{props.children}</span>;
    } else {
        return (
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    props.onClick()
                }}
            >
                {props.children}
            </a>
        );
    }
}
