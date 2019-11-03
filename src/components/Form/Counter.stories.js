import React from 'react';
import { storiesOf } from '@storybook/react';
import './Counter.css'
import Counter from './Counter'

storiesOf('Counter', module)
    .add('Counter', () => (
        <Counter />
    ))