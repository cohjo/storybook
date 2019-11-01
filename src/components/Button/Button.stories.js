import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import './Button.css'

storiesOf('Button', module)
    .add('Blue', () => <Button
        label="Do Something"
        type='blue'
    />)
    .add('Blue White', () => <Button
        label = 'Do Something'
        type='bluewhite'
        />)
    .add('Blue Fade', () => <Button 
        label='Do Something'
        type='bluefade'
        />)
    .add('Large Blue', () => <Button 
        label='Do Something'
        type='blue'
        large
        />)
    .add('Large Blue White', () => <Button 
        label='Do Something'
        type='bluewhite'
        large
        />)
    .add('Large Blue Fade', () => <Button 
        label='Do Something'
        type='bluefade'
        large
        />)
    .add('Blue Voucher', () => <Button
        label="Do Something"
        type='bluevoucher'
    />)
    .add('Blue Voucher Large', () => <Button
        label="Do Something"
        type='bluevoucher'
        large
    />)
    .add('Danger', () => <Button
        label="Do Something"
        type='danger'
    />)
    .add('Danger White', () => <Button
        label = 'Do Something'
        type='dangerwhite'
        />)
    .add('Danger Fade', () => <Button 
        label='Do Something'
        type='dangerfade'
        />)
    .add('Large Danger', () => <Button 
        label='Do Something'
        type='danger'
        large
        />)
    .add('Large Danger White', () => <Button 
        label='Do Something'
        type='dangerwhite'
        large
        />)
    .add('Large Danger Fade', () => <Button 
        label='Do Something'
        type='dangerfade'
        large
        />)
    .add('Success', () => <Button
        label="Do Something"
        type='success'
    />)
    .add('Success White', () => <Button
        label = 'Do Something'
        type='successwhite'
        />)
    .add('Success Fade', () => <Button 
        label='Do Something'
        type='successfade'
        />)
    .add('Large Success', () => <Button 
        label='Do Something'
        type='success'
        large
        />)
    .add('Large Success White', () => <Button 
        label='Do Something'
        type='successwhite'
        large
        />)
    .add('Large Success Fade', () => <Button 
        label='Do Something'
        type='successfade'
        large
        />)
    .add('Warning', () => <Button
        label="Do Something"
        type='warning'
    />)
    .add('Warning White', () => <Button
        label = 'Do Something'
        type='warningwhite'
        />)
    .add('Warning Fade', () => <Button 
        label='Do Something'
        type='warningfade'
        />)
    .add('Large Warning', () => <Button 
        label='Do Something'
        type='warning'
        large
        />)
    .add('Large Warning White', () => <Button 
        label='Do Something'
        type='warningwhite'
        large
        />)
    .add('Large Warning Fade', () => <Button 
        label='Do Something'
        type='warningfade'
        large
        />)
    .add('Default', () => <Button
        label="Do Something"
        type='default'
    />)
    .add('Default White', () => <Button
        label = 'Do Something'
        type='defaultwhite'
        />)
    .add('Default Fade', () => <Button 
        label='Do Something'
        type='defaultfade'
        />)
    .add('Large Default', () => <Button 
        label='Do Something'
        type='default'
        large
        />)
    .add('Large Default White', () => <Button 
        label='Do Something'
        type='defaultwhite'
        large
        />)
    .add('Large Default Fade', () => <Button 
        label='Do Something'
        type='defaultfade'
        large
        />)