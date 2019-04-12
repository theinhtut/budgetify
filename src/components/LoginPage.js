import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        
        <div className="box-layout__box">
            <h1 className="box-layout__title">Budgetify</h1>
            <p>Manage your daily expenses 💸 at your fingertip.</p>
            <button className="button" onClick={startLogin}>Login in with <i class="fab fa-google"></i></button>
        </div>
        <div className="box-layout__overlay"></div>
    </div>
);

const mapDispatchToProps =  (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);