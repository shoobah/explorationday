import React from 'react';

const namelist = props => {
    const listItems = props.items.map(item => {
        return (
            <li>
                {item.first_name} {item.last_name}
            </li>
        );
    });
    return <ul style={{listStyle: "none"}}>{listItems}</ul>;
};

export default namelist;
