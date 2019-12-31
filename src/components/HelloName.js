import React, { Component } from 'react';

export default function HelloName(props) {
    return(
        <p>
            Hello, { props.name ? props.name : 'what is your name?' }
        </p>
    );
}