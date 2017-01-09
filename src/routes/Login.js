import React from 'react';
import {connect} from 'dva';
import NormalLoginForm from '../components/Login';
const Login =({dispatch,user,errorMessage})=>{

    function doLogin(user){

        dispatch({
            type:'login/login',
            payload:user
        });
    }
    
    return (
        <NormalLoginForm err={errorMessage} doLogin={doLogin.bind(user)}/>
    );
};

export default connect()(Login);