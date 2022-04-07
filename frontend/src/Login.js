import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { LoginForm } from './components/user/Login/Login';
import { RegisterForm } from './components/user/Register/Register';

export const Login = () => {   

    return (
        <Provider store={ store }>
            <div className="container pt-5">
                <div className="row">
                    <div className="col">
                        <LoginForm />  
                    </div>               
                    <div className="col">
                        <RegisterForm />  
                    </div>     
                </div>
            </div>    
        </Provider>        
    )
}
