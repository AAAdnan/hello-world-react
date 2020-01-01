import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloName from '../components/HelloName';

storiesOf('HelloName', module)

.add('with name', () => <HelloName name="Adnan"/>)

.add('without name', () => <HelloName />);




