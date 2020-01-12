import React from 'react';
import {render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserContext from '../UserContext';
import HelloName from '../components/HelloName';

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
        const user = 'Adnan';
        const { getByText } = renderHelloName(user); 
        expect(getByText(`Hello, ${user}`)).toBeInTheDocument();
    });

    it('Has element with text Hello {name}', () => {
        const user = 'Jim';
        const { getByText } = renderHelloName(user);
        expect(getByText(`Hello, ${user}`)).toBeInTheDocument();
    });

});

describe('Testing Form Submmission', () => {
    it('Form can submit a value', () => {
        const callbackMock = jest.fn();
        const { getByTestId } = render(<HelloName parentCallback={callbackMock} />);
        const form = getByTestId('secondInputItem');
        fireEvent.click(form);
        expect(callbackMock).toHaveBeenCalledTimes(1);
    })

    // it('Form can submit a value and value is rendered', () => {
      
    //     const { getByTestId } = render(<HelloName } />);
    //     const form = getByTestId('firstInputItem');
    //     fireEvent.change(form, {target: {value: 'whamo'}});
    //     getByTestId('secondInputItem').click();
    //     expect(form.target.value).toBe('whamo');
    // })
});

afterEach(cleanup);
