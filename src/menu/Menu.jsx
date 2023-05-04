import React from 'react';
import './menu.css'

export const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={event => event.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                                <span className="material-icons">{item.icon}</span>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
