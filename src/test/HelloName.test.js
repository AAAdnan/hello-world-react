import React from 'react';
import {render, fireEvent, wait, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloName from '../components/HelloName';

afterEach(cleanup)

describe('This will test HelloName Component', () => {
    it('Has element with text Hello {name}', () => {
        const { getByText } = render(<HelloName name="Adnan" />)

        expect(getByText('Hello, Adnan')).toBeInTheDocument()
    })
    it('Has element with a question if there is no name', () => {
        const { getByText } = render(<HelloName />)

        expect(getByText('Hello, What is your name?')).toBeInTheDocument()
    })
})

