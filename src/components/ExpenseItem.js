import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    const{id, charge, amount} = expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <button className="edit-btn" arial-label="edit button" onClick={()=> handleEdit(id)}>
                <MdEdit />
            </button>
            <button className="clear-btn" arial-label="delete button" onClick={() =>handleDelete(id)}>
                <MdDelete />
            </button>
        </li>
    )
}

export default ExpenseItem;