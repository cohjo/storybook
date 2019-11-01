import React from 'react';
import './Form.css';

const SignUpForm = (props) => {
    let classList = '';
    let types = ['medium', 'large']

    if (types.includes(props.type)) {
        classList += ` forms__${props.type}`;
    }

    if (props.medium) {
        classList += ` form__medium`;
    }

    if (props.large) {
        classList += ` form__large`;
    }

    return (
        <form className={classList}>
            <label htmlFor="email" className="form__label">Email</label>
            <p>
                <input type="email"
                       id="email"
                       placeholder="Email"
                       className={`form__input__${props.size}`}
                />
            </p>
        </form>
    );
};

export default SignUpForm;