import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const BudgetifyDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default BudgetifyDashboardPage;