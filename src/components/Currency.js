import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [currencyState, setCurrency] = useState(currency);

    const onUpdateCurrency = (newCurrency) => {
        // set new currency;
        console.log("current currency: " + currency);
        console.log("new currency: " + newCurrency);
        console.log("currentState : " + newCurrency);
        
        setCurrency(newCurrency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
        
    };


    return (
        <div className='alert alert-info'>  
            <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01"  value={currencyState} onChange={(event) => onUpdateCurrency(event.target.value)} 
            style={{ backgroundColor: 'rgb(195,247,31)'}}>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" name="pound"> £ Pound </option>
                <option value="€" name="euro"> € Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;