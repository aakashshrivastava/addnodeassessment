import React from 'react';

export default (props) => {
    return <button onClick={() => props.context.updateConfiguration(props.data)}>Edit</button>;
};