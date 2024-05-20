import { Children } from "react";

export const List = ({ type = 'column', children, title }) => {
    const className = type === 'column' ? 'list-column' : 'list-grid';

    if (Children.count(children) === 0) {
        return null;
    }

    return (
        <section className="list">
            {title ? (
                <>
                    <h3 className="h3-text list__title">{title}</h3>
                    <div className="divider"></div>
                </>
            ) : null}

            <ul className={className}>
                {Children.map(children, (child) => {
                    return <li>{child}</li>
                })}
            </ul>
        </section>
    );
};