import React from 'react';

export default (props) => {
    return <button onClick={() => props.context.deleteConfiguration(props.data.id)}>Delete</button>;
};