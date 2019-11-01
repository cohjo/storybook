import React from 'react';
import { storiesOf } from '@storybook/react';
import './Voucher.css';
import Voucher from './Voucher';
import Button from '../Button/Button';
import '../Button/Button.css';

storiesOf('Voucher', module)
.add('Default', () => (
    <div><Voucher size='default'/><Button type='bluevoucher' label='Redeem'/></div>
))
.add('Large', () => (
    <div><Voucher size='large'/><Button type='bluevoucherlarge' label='Redeem' /></div>
));