import React, { useContext, useState } from 'react';
import UserContext from '../UserContext';

export default function HelloName({ parentCallback }) {

    const user = useContext(UserContext);

    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setName(e.target.value)
    }

    return(
            <React.Fragment>
            <p>
                Hello, { user ? user : 'What is your name?' }
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    First {name} :
                    <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    />
                </label>
                <input type="submit" value='submit' onClick={() => { parentCallback(name)}}/>
            </form>
            </React.Fragment>
    );
}