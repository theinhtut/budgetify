import React from 'react';
import { shallow } from 'enzyme';
import BudgetifyDashboardPage from '../../components/BudgetifyDashboardPage';


test('should render BudgetifyDashboardPage correctly', () => {
    const wrapper = shallow(<BudgetifyDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});