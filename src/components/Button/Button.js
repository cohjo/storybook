import React from 'react';

const Button = (props) => {
    let classList = '';
    let types = ['blue', 'bluewhite', 'bluefade',
                'danger', 'dangerwhite', 'dangerfade',
                'success', 'successwhite', 'successfade',
                'warning', 'warningwhite', 'warningfade',
                'default', 'defaultwhite', 'defaultfade',
                'bluevoucher', 'bluevoucherlarge'];

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`;
    }

    if (props.large) {
        classList += ` button-large`;
    }

    return <button className={classList}>
        {props.label}
    </button>
    
}

export default Button;