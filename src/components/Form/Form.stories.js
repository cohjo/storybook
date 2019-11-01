import React from 'react';
import { storiesOf } from '@storybook/react';
import './Form.css'
import SignUpForm from './Form'

storiesOf('Registration Form', module)
    .add('Default', () => (
        <div><SignUpForm size='default'/></div>
    ))
    .add('Medium', () => (
        <div><SignUpForm size='medium'/></div>
    ))
    .add('Large', () => (
        <div><SignUpForm size='large' /></div>
    ));