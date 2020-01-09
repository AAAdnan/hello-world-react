import React, { useContext } from 'react';
import UserContext from '../UserContext';

export default function HelloName() {

    const user = useContext(UserContext)

    return(
            <p>
                Hello, { user.name ? user.name : 'What is your name?' }
            </p>
    );
}