import React from 'react';

export default function HelloName(props) {
    return(
        <p>
            Hello, { props.name ? props.name : 'What is your name?' }
        </p>
    );
}