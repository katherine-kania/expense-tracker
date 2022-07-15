import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 7, 15)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67
    
    return (
        <div className="expense-item">
        <div className="expense-item_description">{props.date.toISOString()}</div>
        <div>
            <h2>{props.title}</h2>
            <div className="expense-item_price">${props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
