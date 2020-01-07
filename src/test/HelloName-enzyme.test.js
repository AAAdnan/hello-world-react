import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HelloName from '../components/HelloName';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

test('HelloName components renders with correct name', () => {

    const checkName = shallow(<HelloName name="Adnan" />);

    expect(checkName.text()).toEqual('Hello, Adnan');
});

test('HelloName components renders with correct question', () => {

    const checkName = shallow(<HelloName />);

    expect(checkName.text()).toEqual('Hello, What is your name?');
});