import React from 'react';
import './Voucher.css';

const Voucher = (props) => {

    let classList = '';
    let types = ['default', 'large'];

    if (types.includes(props.type)) {
        classList += ` voucher_${props.type}`;
    }

    return (
        <form className={classList}>
            <label className="voucher_label"></label>
            <p>
                <input placeholder="Voucher Code"
                       className={`voucher_input_${props.size}`}
                />
            </p>
        </form>
    );
}

export default Voucher;