import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

    const onUpdateCurrency = (newCurrency) => {
        //set new currency;
    }

    return (
        <div className='alert alert-info'>  
            <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => onUpdateCurrency(event.target.value)} 
            style={{ backgroundColor: 'rgb(195,247,31)'}}>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" selected="selected" name="pound"> £ Pound </option>
                <option value="€" name="euro"> € Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;