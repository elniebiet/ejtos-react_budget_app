
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, dispatch } = useContext(AppContext);
    const [budgetState, setBudget] = useState(budget);

    const onUpdateBudget = (newBudget) => {
        console.log("budget is being updated");
        console.log("old budget" + budget);
        console.log("new budget" + newBudget);

        if(newBudget > remaining)
        {
            alert("budget cannot exceed remaining funds of: £" + remaining);
            return;
        }

        let currentExpenses = budget - remaining
        if(newBudget < currentExpenses)
        {
            setBudget(newBudget);
            alert("you cannot reduce the budget value lower than the spending of £" + currentExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });

    }

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
                    onChange={(event) => onUpdateBudget(event.target.value)}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;