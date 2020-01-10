import React from 'react';
import {render, fireEvent, wait, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserContext from '../UserContext';
import HelloName from '../components/HelloName';

afterEach(cleanup)

function renderHelloName(user) {
    return render(
        <UserContext.Provider value={user}>
            <HelloName />
        </UserContext.Provider>
    );
}

describe('This will test HelloName Component with context', () => {
    it('Has element with a question if it has no name', () => {
        const { getByText } = renderHelloName('');
        expect(getByText('Hello, What is your name?')).toBeInTheDocument();
    })

    it('Has element with text Hello {name}', () => {
        const user = { name: 'Adnan' }
        const { getByText } = renderHelloName(user);
        expect(getByText(`Hello, ${user.name}`)).toBeInTheDocument();
    });

    it('Has element with text Hello {name}', () => {
        const user = { name: 'Jim' }
        const { getByText } = renderHelloName(user);
        expect(getByText(`Hello, ${user.name}`)).toBeInTheDocument();
    });

});

