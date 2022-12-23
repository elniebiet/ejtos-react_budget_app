
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [budgetState, setBudget] = useState(budget);

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £{budget}
                <input
                    required='required'
                    type='number'
                    id='cost'
                    step="10"
                    max="20000"
                    value={budgetState}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget(event.target.value)}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;