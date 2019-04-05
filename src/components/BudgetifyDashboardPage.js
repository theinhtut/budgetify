import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const BudgetifyDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default BudgetifyDashboardPage;