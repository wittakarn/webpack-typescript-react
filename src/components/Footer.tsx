import * as React from 'react';

export interface LinkProp {
    active: boolean;
    children: boolean;
    onClick: () => void;
}

export const Link: React.StatelessComponent<LinkProp> = (props: LinkProp) => (
    <p>
        Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
);
